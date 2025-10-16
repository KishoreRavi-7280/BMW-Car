
// =====================
// BMW Models List
// =====================

const models = {
  "X Series": ["X5 Drive40i", "X5 Plug-in","X5", "X5 M Competition"],
  "M Series": ["M3 F80 Sedan", "M4 Cs", "M5 Hurricane RR", "Sedan","M3 Competition"]
};

// =====================
// Dropdown Logic
// =====================
const seriesDropdown = document.querySelector("#bmwSeriesDropdown");
const modelDropdown = document.querySelector("#bmwModelDropdown");
const seriesMenu = seriesDropdown.querySelector(".bmwmnu");
const modelMenu = modelDropdown.querySelector(".bmwmnu2");
const seriesSelected = seriesDropdown.querySelector(".sltd");
const modelSelected = modelDropdown.querySelector(".sltd");

// Toggle dropdowns
document.querySelectorAll(".bmwdrpd").forEach(drop => {
  drop.addEventListener("click", () => drop.classList.toggle("open"));
});


// Select Car Series
seriesMenu.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    const selectedSeries = item.textContent.trim();
    seriesSelected.textContent = selectedSeries;
    seriesDropdown.classList.remove("open");

    // Update models
    modelMenu.innerHTML = "";
    if (models[selectedSeries]) {
      models[selectedSeries].forEach(m => {
        const li = document.createElement("li");
        li.textContent = m;
        li.addEventListener("click", () => {
          modelSelected.textContent = m;
          modelDropdown.classList.remove("open");
        });
        modelMenu.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "Select a Series";
      modelMenu.appendChild(li);
    }
  });
});

// =====================
// Booking Form Submit
// =====================
document.getElementById("bmwBookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("bmwBName").value.trim();
  const email = document.getElementById("bmwBEmail").value.trim();
  const contact = document.getElementById("bmwBContact").value.trim();
  const address = document.getElementById("bmwBLocation").value.trim();
  const series = seriesSelected.textContent.trim();
  const model = modelSelected.textContent.trim();
  const pickup = document.getElementById("bmwPickup").value;
  const dropoff = document.getElementById("bmwDropoff").value;

  if (!name || !email || !contact || !series || !model) {
    alert("⚠️ Please fill all required fields before booking!");
    return;
  }

  // =========================
  // 1️⃣ Send Email via Web3Forms
  // =========================
  const web3formsAccessKey = '02465c3b-d080-4f1a-a083-f8626172519c';
  const emailData = {
    access_key: web3formsAccessKey,
    subject: `New BMW Booking from ${name}`,
    from_name: name,
    from_email: email,
    message: `Your Booking Confirmed!

Name: ${name}
Email: ${email}
Contact: ${contact}
Address: ${address}

Series: ${series}
Model: ${model}

Pickup: ${pickup}
Dropoff: ${dropoff}`
  };

  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData)
    });
  } catch (err) {
    console.error('Email submission failed:', err);
  }

  // =========================
  // 2️⃣ Send SMS via Fast2SMS
  // =========================
  const fast2smsAPIKey = 'vtbQkW0FIk1bXR7h7ZLmrywsNER2H2fcjC8K7tYL6JfYdbPXPLDzFhUjDA0j';
  const message = `🏁 BMW Booking Confirmed!
Hello ${name},

Your booking is confirmed.

📌 Details:
Series: ${series}
Model: ${model}
Pickup: ${pickup}
Dropoff: ${dropoff}
Address: ${address}

Thank you for choosing BMW. 🚗💨`;

  try {
    const smsResponse = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        'authorization': fast2smsAPIKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender_id: "FSTSMS",
        route: "p",
        language: "english",
        numbers: contact,
        message: message
      })
    });
    const result = await smsResponse.json();
    console.log('SMS result:', result);
  } catch (err) {
    console.error('SMS sending failed:', err);
  }

  // =========================
  // 3️⃣ Confirmation to user
  // =========================
  alert('✅ Booking successful! Confirmation SMS sent to your contact.');
  window.location.href = '../thankyou.html';
});

