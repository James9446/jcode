//      View Control
const updateView = (targetId, newId, label, element, method='', addElement) => {
  let newElement = document.createElement(element);
  newElement.id = newId;
  
  let content = document.createTextNode(label + method);
  newElement.appendChild(content);
  
  let currentElement = document.getElementById(targetId);
  let parentElement = currentElement.parentNode;
  if (addElement) {
    parentElement.appendChild(newElement, currentElement);
  } else {
    parentElement.replaceChild(newElement, currentElement);
  }
}

const updateAllUserInfo = () => {
  // Segment Data
  // Anonymous ID View
  updateView("anony", "anony", "", "P", analytics.user().anonymousId());
  
  // User ID View
  updateView("user", "user", "", "P", analytics.user().id());

  const email = analytics.user().traits().email ? analytics.user().traits().email : null;

  // Email View
  updateView("seg-email", "seg-email", "", "P", email);

  // Friendbuy Local Storage Data
  const fBuyUser = getFriendbuyLocalStorageUserData()

  // Customer ID View
  updateView("customer-id", "customer-id", "", "P", fBuyUser.customerId);
      
  // FBuy Email View
  updateView("fnd-email", "fnd-email", "", "P", fBuyUser.email);

  // Is Authenticated View
  updateView("is-authenticated", "is-authenticated", "", "P", fBuyUser.isAuthenticated);

  // Attribution ID View
  friendbuyAPI.push([
    "getVisitorStatus",
    function (status) {
      try {
        const attributionId = status.payload && status.payload.attributionId ? status.payload.attributionId : null;
        const referralCode = status.payload && status.payload.referralCode ? status.payload.referralCode : null;
        updateView("attribution-id", "attribution-id", "", "p", attributionId);
        updateView("referral-code", "referral-code", "", "p", referralCode);
      } catch (error) {
        console.error(error);
      }
    },
  ]);
}


// Segment Identify 

const callIdentify = (e) => {
  // Check for existing user data in local storage before allowing an identify call 
  let fBuyUser = getFriendbuyLocalStorageUserData()
  let warning = document.getElementById("login-warning").innerText
  // waring will only apear once - a second click will allow you to click identify 
  if ((fBuyUser.email || fBuyUser.email) && !warning) {
    updateView("login-warning", "login-warning", "", "p", "Are you sure? User data found in Local Storage");
    return;
  };
  // identify user based on dropdown selection
  let user = users[document.getElementById("usersDropdown").value];
  if (e.shiftKey) {
    return console.log(`analytics.identify(${JSON.stringify(user.userId)}, ${JSON.stringify(user.traits, null, ' ')})`);
  }
  analytics.identify(user.userId, user.traits);
}


// Segment Dedicated Track Buttons

const orderCompleted = (e) => {
  let event = ecommerceEvents.orderCompleted;
  const coupon = document.getElementById("coupon-header").innerText;
  event.properties.coupon = coupon;
  event.properties.order_id = crypto.randomUUID();
  if (e.shiftKey) {
    return console.log(`analytics.track(${JSON.stringify(event.eventName)}, ${JSON.stringify(event.properties, null, ' ')})`);
  }
  analytics.track(event.eventName, event.properties)
};

const signedUp = (e) => {
  let user = getUserDataFromDropdown();
  if (e.shiftKey) {
    return console.log(
      `analytics.track('Signed Up', {
        firstName: ${JSON.stringify(user.traits.first_name)},
        lastName: ${JSON.stringify(user.traits.last_name)},
        email: ${JSON.stringify(user.traits.email)},
      });`
    );
  }
  analytics.track('Signed Up', {
    firstName: user.traits.first_name,
    lastName: user.traits.last_name,
    email: user.traits.email,
  });
};

const customEvent = (e) => {
  const coupon = document.getElementById("coupon-header").innerText;
  const attributionId = document.getElementById("attribution-id").innerText;
  const referralCode = document.getElementById("referral-code").innerText;

  if (e.shiftKey) {
    return console.log(
      `analytics.track("custom_event", {
        coupon: ${JSON.stringify(coupon)},
        attributionId: ${JSON.stringify(attributionId)},
        referralCode: ${JSON.stringify(referralCode)}
      })`
    );
  }
  analytics.track("custom_event", {
    coupon,
    attributionId,
    referralCode
  })
};


// Segment All Ecommerce Events

const fireEvent = (e) => {
  let event = ecommerceEvents[document.getElementById("eventDropdown").value];
  const coupon = document.getElementById("coupon-header").innerText;

  if (event.properties.coupon) {
    event.properties.coupon = coupon;
  }
  if (event.properties.order_id) {
    event.properties.order_id = crypto.randomUUID();
  }
  if (e.shiftKey) {
    return console.log(`analytics.track(${JSON.stringify(event.eventName)}, ${JSON.stringify(event.properties, null, ' ')})`);
  }
  analytics.track(event.eventName, event.properties)
}


// Segment Loyalty Points Custom Event 
// (only on Loyalty Page)

const pointsEarned = (e) => {
  const points = document.getElementById("points-dropdown").value.split("-")[1];
  if (e.shiftKey) {
    return console.log(`analytics.track("points_earned", { 
        points: ${points}
      });`
    )
  }
  if (!analytics.user().id()) {
    updateView("points-warning", "points-warning", "You must be logged in to earn points", "P");
    return;
  }
  updateView("points-warning", "points-warning", "", "P");
  analytics.track("points_earned", { points });
  updateView("points-log", "points-log", `Earned ${points} points`, "P", '', true);
}


// ---- FRIENDBUY CODE SECTION START ----

function getUserDataFromDropdown() {
  return users[document.getElementById("usersDropdown").value];
};

const fBuyTrackCustomer = (e) => {
  let user = getUserDataFromDropdown();
  if (e.shiftKey) {
    // return console.log(`analytics.identify(${JSON.stringify(user.userId)}, ${JSON.stringify(user.traits, null, ' ')})`);
    return console.log(
      `friendbuyAPI.push([
        "track",
        "customer",
        {
          email: ${JSON.stringify(user.traits.email)},
          id: ${JSON.stringify(user.userId)}, 
          firstName: ${JSON.stringify(user.traits.first_name)}, 
          lastName: ${JSON.stringify(user.traits.last_name)}
        },
      ]);`
    );
  }
  friendbuyAPI.push([
    "track",
    "customer",
    {
      email: user.traits.email,
      id: user.userId, 
      firstName: user.traits.first_name, 
      lastName: user.traits.last_name 
    },
  ]);
  setTimeout(() => {
    // wait for local storage to update
    updateAllUserInfo()
  }, 200)
}

function fBuyTrackPage(e) {
  const page = document.getElementById("page").innerText;
  console.log("fBuy Track Page: ", page);
  
  if (e.shiftKey) {
    return console.log(
      `friendbuyAPI.push([
        "track",
        "page",
        {
          name: ${JSON.stringify(page)},
        }
      ]);`
    )
  }
  friendbuyAPI.push([
    "track",
    "page",
    {
      name: page,
    }
  ]);
}

function fBuyTrackPurchase(e) {
  console.log("fBuy Track Purchase");
  const user = getUserDataFromDropdown();
  const products = ecommerceEvents.orderCompleted.properties.products;
  const coupon = document.getElementById("coupon-header").innerText;

  if (e.shiftKey) {
    return console.log(
      `friendbuyAPI.push([
        "track",
        "purchase",
        {
          id: ${JSON.stringify(crypto.randomUUID())},
          amount: 22,
          currency: "USD", 
          couponCode: ${JSON.stringify(coupon)},   
          products: ${JSON.stringify(deepParseJson(JSON.stringify(products)), null, 2)},
          customer: {
            email: "",
            id: "", 
            firstName: "", 
            lastName: ""
          }
        },
      ]);`
      // Leaving this option here in comments to pull customer data from the user dropdown
      // customer: {
      //   email: ${JSON.stringify(user.traits.email)},
      //   id: ${JSON.stringify(user.userId)}, 
      //   firstName: ${JSON.stringify(user.traits.first_name)}, 
      //   lastName: ${JSON.stringify(user.traits.last_name)}
      // }
    );
  }
  friendbuyAPI.push([
    "track",
    "purchase",
    {
      id: crypto.randomUUID(),
      amount: 22,
      currency: "USD", 
      couponCode: coupon,   
      products,
      // customer: {
      //   email: user.traits.email,
      //   id: user.userId, 
      //   firstName: user.traits.first_name, 
      //   lastName: user.traits.last_name 
      // }
    },
  ]);
  setTimeout(() => {
    // wait for local storage to update
    updateAllUserInfo()
  }, 200)
}

function fBuyTrackSignUp(e) {
  console.log("fBuy Track Sign Up");
  let user = getUserDataFromDropdown();
  if (e.shiftKey) {
    return console.log(
      `friendbuyAPI.push([
        "track",
        "sign_up",
        {
          email: ${JSON.stringify(user.traits.email)},
          id: ${JSON.stringify(user.userId)}, 
          name: ${JSON.stringify(`${user.traits.first_name} ${user.traits.last_name}`)} 
        },
      ]);`
    )
  }
  friendbuyAPI.push([
    "track",
    "sign_up",
    {
      email: user.traits.email,
      id: user.userId, 
      name: `${user.traits.first_name} ${user.traits.last_name}` 
    },
  ]);
  setTimeout(() => {
    // wait for local storage to update
    updateAllUserInfo()
  }, 200)
}

// ---- FRIENDBUY CODE SECTION END ----



// Utility Functions

const getFriendbuyLocalStorageUserData = () => {
  // Friendbuy Local Storage Data
  const friendbuyLocalStorage = deepParseJson(localStorage.getItem("persist:friendbuy-msdk-06192019-root"))
  const fBuyUser = {}
  fBuyUser.customerId = friendbuyLocalStorage && friendbuyLocalStorage.customer && friendbuyLocalStorage.customer.id ? friendbuyLocalStorage.customer.id : null;
  fBuyUser.email = friendbuyLocalStorage && friendbuyLocalStorage.customer && friendbuyLocalStorage.customer.email ? friendbuyLocalStorage.customer.email : null;
  fBuyUser.isAuthenticated = friendbuyLocalStorage && friendbuyLocalStorage.tracker ? friendbuyLocalStorage.tracker.isAuthenticated : null;
  return fBuyUser;
}

async function authenticateCustomer() {
  fBuyUser = getFriendbuyLocalStorageUserData();
  try {
    const response = await fetch('/customer-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // You can include a request body if needed
      body: JSON.stringify(fBuyUser),
    });

    const data = await response.json();
    // example response: {authString: '1693378273:james+advocate@friendbuy.com:3059446', signature: 'a2df1ff5bca2fba9235c4ba4143c7806a92a403d9a3ca3f0be7f3a7e26d4b0e3'}
    friendbuyAPI.push(["auth", data.authString, data.signature]);
    setTimeout(() => {
      // wait for local storage to update
      updateAllUserInfo()
    }, 500);
  } catch (error) {
    console.error('Error:', error);
  }
}

function deepParseJson(json) {
  var obj = JSON.parse(json);
  for (var k in obj) {
      if (typeof obj[k] === "string" && obj[k][0] === "{") {
          obj[k] = deepParseJson(obj[k]);
      }
  }
  return obj;
}

const clearAll = () => {
  resetAnalytics();
  clearStorageAndCookies();
}

const resetAnalytics = () => {
  analytics.reset();
  updateAllUserInfo();
}

const clearStorageAndCookies = () => {
  const fBuyUser = getFriendbuyLocalStorageUserData()
  const customerId = fBuyUser.customerId;
  console.log(`__fby__customer_${customerId}`)
  localStorage.removeItem("persist:friendbuy-msdk-06192019-root");
  localStorage.removeItem(`__fby__customer_${customerId}`);
  document.cookie = "name=globalId; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
  updateView("login-warning", "login-warning", "", "P");
  updateAllUserInfo();
}

const logInt = () => {
  console.info(analytics.Integrations);
}

const logVisitor = () => {
  friendbuyAPI.push([
    "getVisitorStatus",
    function (status) {
      try {
        console.log(status);
      } catch (error) {
        console.error(error);
      }
    },
  ]);
}

const getWriteKey = () => {
  let wk = document.getElementById("writeKeyInput").value;
  if (wk) {
    location.replace("https://james9446.github.io/?wk=" + wk);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const copyPassword = () => {
  let text = document.getElementById("passwordValue").textContent;
  navigator.clipboard.writeText(text);
};





// Button Event Listener
// addEventListener("load", () => {updateAllUserInfo()});
if (window.location.href.includes("/loyalty")) {
  document.getElementById("points-earned").addEventListener("click", pointsEarned);
}
document.getElementById("clear-all").addEventListener("click", clearAll);
document.getElementById("clear-segment").addEventListener("click", resetAnalytics);
document.getElementById("clear-friendbuy").addEventListener("click", clearStorageAndCookies);
document.getElementById("getWriteKey").addEventListener("click", getWriteKey);
document.getElementById("callIdentify").addEventListener("click", callIdentify);
document.getElementById("logInt").addEventListener("click", logInt);
document.getElementById("logVisitor").addEventListener("click", logVisitor);
document.getElementById("fireEvent").addEventListener("click", fireEvent);
document.getElementById("order-completed").addEventListener("click", orderCompleted);
document.getElementById("signed-up").addEventListener("click", signedUp);
document.getElementById("custom-event").addEventListener("click", customEvent);
document.getElementById("fbuy-customer").addEventListener("click", fBuyTrackCustomer);
document.getElementById("fbuy-page").addEventListener("click", fBuyTrackPage);
document.getElementById("fbuy-purchase").addEventListener("click", fBuyTrackPurchase);
document.getElementById("fbuy-sign-up").addEventListener("click", fBuyTrackSignUp);


// Initial View
analytics.ready(() => {
  updateAllUserInfo();

  friendbuyAPI.push([
    "subscribe",
    "couponReceived",
    function (coupon) {
      console.log("coupon: ", coupon); 
      updateView("coupon-header", "coupon-header", "", "H3", `Coupon Applied: ${coupon}`);
      updateAllUserInfo();
    },
  ]);

  friendbuyAPI.push([
    "subscribe",
    "widgetActionTriggered",
    function (action) {
      if (action.actionName === "emailShare" || action.actionName === "copyText" || action.actionName === "advocateEmailCaptured") {
        updateAllUserInfo();
      }
    },
  ]);
});


analytics.on('identify', () => {
  updateAllUserInfo();
  updateView("login-warning", "login-warning", "", "P");
  authenticateCustomer();
});

updateView("writeKeyValue", "writeKeyValue", "Write Key: ", "P", writeKey);


// Display track call
analytics.on('track', function(event, properties, options) {
  // updateView("track", "track", "Track Event Fired", "H4");
  updateView("event", "event", event, "P", '', true);
  // updateView("prop", "prop", JSON.stringify(properties, null, '\t'), "textArea");
  updateAllUserInfo();
});   

// Display Page call
analytics.on('page', function(event, properties, options) {
  // updateView("track", "track", "Track Event Fired", "H4");
  console.log("event", event);
  console.log("properties", properties);
  console.log("options", options);
  updateView("event", "event", `Page Viewed: ${properties || options.title}`, "P", '', true);
  // updateView("prop", "prop", JSON.stringify(properties, null, '\t'), "textArea");
  updateAllUserInfo();
}); 




// const getOS = () => {
//   var OSName="Unknown OS";
//   if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
//   if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
//   if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
//   if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
//   if (navigator.appVersion.indexOf("Android")!=-1) OSName="Android";
//   if (navigator.appVersion.indexOf("iOS")!=-1) OSName="iOS";
//   console.log(`The operating system is ${OSName}`);
//   analytics.track('Get OS', {
//     os: OSName
//   });
// }
