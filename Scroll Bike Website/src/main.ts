import("@needle-tools/engine") /* async import of needle engine */;
import { DeviceUtilities } from "@needle-tools/engine";

document.addEventListener("DOMContentLoaded", () => {
    if(DeviceUtilities.isMobileDevice()) {
        const qr_code = document.querySelector('.qr-code');
        if(qr_code) {
            qr_code.remove();
        }
    }
})