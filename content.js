setInterval(() => {
    const a1 = document.getElementsByClassName('ytp-ad-skip-button-slot');
    const a2 = document.getElementsByClassName('ytp-ad-skip-button-container');
    const a3 = document.getElementsByClassName('ytp-ad-skip-button-modern');
    const a4 = document.getElementsByClassName('ytp-ad-skip-button-text');
    const a5 = document.getElementsByClassName('ytp-ad-skip-button');
    const a6 = document.getElementsByClassName('ytp-ad-preview-slot');
    for (let i = 0; i < a1.length; i++) {
        a1[i].style.display = "block";
    }
    for (let i = 0; i < a2.length; i++) {
        a2[i].style.display = "block";
    }
    for (let i = 0; i < a3.length; i++) {
        a3[i].style.display = "block";
    }
    for (let i = 0; i < a4.length; i++) {
        a4[i].style.display = "block";
    }
    for (let i = 0; i < a5.length; i++) {
        a5[i].style.display = "block";
    }
    for (let i = 0; i < a6.length; i++) {
        a6[i].style.display = "none";
    }
    if (a5.length > 0) {
        a5[0].click();
    }
}, 1000);