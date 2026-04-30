document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("fm1");

    if (!form) {
        return; // Exit early if form doesn't exist
    }

    form.addEventListener("submit", function(e) {
        var calnet_id = document.getElementById("username");

        if (!calnet_id) {
            return true; // Allow submission if username field doesn't exist
        }

        // Trim leading and trailing spaces
        calnet_id.value = calnet_id.value.replace(/^\s+|\s+$/g, "");

        if (window.location.search && decodeURIComponent(window.location.search).match(/bpr.calnet.berkeley.edu\/account-manager/) && calnet_id.value.match(/^cads\d+$/)) {
            return true;
        } else if (calnet_id.value.match(/^cads\d+$/)) {
            e.preventDefault(); // Stop form from submitting

            var message = "You're using an inactive legacy Alumni ID (cads). Click OK to learn how to fix this.";
            alert(message);

            window.location.href = "https://berkeley.service-now.com/kb?id=kb_article_view&sysparm_article=KB0014883";
            return false; // Prevent form submission
        }

        // If no conditions are met, allow normal submission
        return true;
    });
});
