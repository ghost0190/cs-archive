function loaded() {
    var showHelp = document.getElementById("showHelpText");
    var hideHelp = document.getElementById("hideHelpText");
    var helpTextTop = document.getElementById("helpTextTop").offsetTop;
    var helpText = document.getElementById("helpText");
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var toggleHelp = function () {
        var hidden = helpText.style.display === 'none';
        helpText.style.display = (hidden ? '' : 'none');
        helpText.setAttribute("aria-hidden", hidden ? "false":"true");

        // Scroll when this event is over
        window.setTimeout(function () {
            window.scrollTo(0, hidden ? helpTextTop : 0);
        }, 50);
        hideHelp.style.display = hidden ? '' : 'none';
        showHelp.style.display = hidden ? 'none' : '';
        return false;
    };

    showHelp.addEventListener("click", toggleHelp, false);
    hideHelp.addEventListener("click", toggleHelp, false);

    var helpLinks = document.getElementsByClassName("helpLink");
    for (var i = 0; i < helpLinks.length; i++) {
        helpLinks[i].setAttribute("target", "_blank");
    }

    username.setAttribute("autocomplete", "off");
    password.setAttribute("autocomplete", "off");

    // Fix for autofill label overlap issue
    function floatLabelIfFilled(input) {
        if (!input) return;

        var label = input.parentElement;
        if (!label) return;

        var floatingLabel = label.querySelector('.mdc-floating-label');
        var notchedOutline = label.querySelector('.mdc-notched-outline');

        if (input.value && input.value.length > 0) {
            if (floatingLabel) {
                floatingLabel.classList.add('mdc-floating-label--float-above');
            }
            if (notchedOutline) {
                notchedOutline.classList.add('mdc-notched-outline--notched');
            }
            if (label) {
                label.classList.add('mdc-text-field--label-floating');
            }
        } else {
            if (floatingLabel) {
                floatingLabel.classList.remove('mdc-floating-label--float-above');
            }
            if (notchedOutline) {
                notchedOutline.classList.remove('mdc-notched-outline--notched');
            }
            if (label) {
                label.classList.remove('mdc-text-field--label-floating');
            }
        }
    }

    // Check for autofill on page load
    function checkAutofill() {
        floatLabelIfFilled(username);
        floatLabelIfFilled(password);
    }

    // Check immediately
    checkAutofill();

    // Check after a short delay (for slower autofill)
    setTimeout(checkAutofill, 100);
    setTimeout(checkAutofill, 500);

    // Monitor for changes using various events
    if (username) {
        username.addEventListener('input', function() { floatLabelIfFilled(username); });
        username.addEventListener('change', function() { floatLabelIfFilled(username); });
        username.addEventListener('blur', function() { floatLabelIfFilled(username); });
        username.addEventListener('animationstart', function(e) {
            if (e.animationName === 'onAutoFillStart') {
                floatLabelIfFilled(username);
            }
        });
    }

    if (password) {
        password.addEventListener('input', function() { floatLabelIfFilled(password); });
        password.addEventListener('change', function() { floatLabelIfFilled(password); });
        password.addEventListener('blur', function() { floatLabelIfFilled(password); });
        password.addEventListener('animationstart', function(e) {
            if (e.animationName === 'onAutoFillStart') {
                floatLabelIfFilled(password);
            }
        });
    }

    username.focus();
}

window.onload = loaded;