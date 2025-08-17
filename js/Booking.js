const bmwModels = {
      X: ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "iX"],
      M: ["M2 Coupe", "M3 Sedan", "M4 Coupe", "M5 Sedan", "M8 Coupe", "XM SUV"]
    };

    // Handle dropdown open/close + selection
    function setupDropdown(dropdown, callback) {
      const slt = dropdown.querySelector(".slt");
      const caret = dropdown.querySelector(".caret");
      const menu = dropdown.querySelector("ul");
      const selected = dropdown.querySelector(".sltd");

      slt.addEventListener("click", () => {
        slt.classList.toggle("slt-clcd");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("bmwmnu-open");
      });

      menu.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          selected.innerText = e.target.innerText;
          slt.classList.remove("slt-clcd");
          caret.classList.remove("caret-rotate");
          menu.classList.remove("bmwmnu-open");

          menu.querySelectorAll("li").forEach(li => li.classList.remove("active"));
          e.target.classList.add("active");

          if (callback) callback(e.target.getAttribute("data-value"), e.target.innerText);
        }
      });
    }

    // Series dropdown
    setupDropdown(document.getElementById("bmwSeriesDropdown"), (seriesKey) => {
      const modelMenu = document.querySelector("#bmwModelDropdown ul");
      const modelSelected = document.querySelector("#bmwModelDropdown .sltd");
      modelMenu.innerHTML = ""; // clear models
      modelSelected.innerText = "Car Model";

      if (bmwModels[seriesKey]) {
        bmwModels[seriesKey].forEach(model => {
          let li = document.createElement("li");
          li.innerText = model;
          li.setAttribute("data-value", model);
          modelMenu.appendChild(li);
        });
      } else {
        modelMenu.innerHTML = "<li>Select a Series </li>";
      }
    });

    // Model dropdown
    setupDropdown(document.getElementById("bmwModelDropdown"));

    // Booking Form Submit
    document.getElementById("bmwBookingForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("🎉 Your BMW booking has been confirmed!");
      this.reset();

      // Reset dropdowns display
      document.querySelector("#bmwSeriesDropdown .sltd").innerText = "Car Series";
      document.querySelector("#bmwModelDropdown .sltd").innerText = "Car Model";
    });