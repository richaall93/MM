document.addEventListener("DOMContentLoaded", () => {
    const vfChatContainer = document.getElementById("vf-chat");

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
        window.voiceflow.chat.load({
            verify: { projectID: "67a218f663ce399a2a0cd517" }, // Your provided project ID
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
            voice: {
                url: "https://runtime-api.voiceflow.com"
            },
            render: {
                mode: "embedded",
                target: vfChatContainer,
            },
            autostart: true,
            onReady: (chat) => {
                const applyStyles = () => {
                    if (!chat || !chat.iframe || !chat.iframe.contentDocument) {
                        requestAnimationFrame(applyStyles);
                        return;
                    }

                    const iframeDoc = chat.iframe.contentDocument;
                    if (!iframeDoc) return;

                    document.documentElement.style.setProperty('--vf-chat-bg', '#000000');
                    document.documentElement.style.setProperty('--vf-user-message-bg', '#FFD700');
                    document.documentElement.style.setProperty('--vf-user-message-color', '#000000');
                    document.documentElement.style.setProperty('--vf-assistant-message-bg', '#333333');
                    document.documentElement.style.setProperty('--vf-assistant-message-color', '#FFD700');
                    document.documentElement.style.setProperty('--vf-input-bg', '#1a1a1a');
                    document.documentElement.style.setProperty('--vf-input-color', '#FFD700');
                    document.documentElement.style.setProperty('--vf-button-bg', '#FFD700');
                    document.documentElement.style.setProperty('--vf-button-color', '#000000');

                    const style = iframeDoc.createElement('style');
                    style.textContent = `
                        .vfrc-chat-container {
                            background-color: var(--vf-chat-bg) !important;
                        }
                        .vfrc-message--user .vfrc-message__content p {
                            background-color: var(--vf-user-message-bg) !important;
                            color: var(--vf-user-message-color) !important;
                        }
                        .vfrc-message--assistant .vfrc-message__content p {
                            background-color: var(--vf-assistant-message-bg) !important;
                            color: var(--vf-assistant-message-color) !important;
                        }
                        .vfrc-input {
                            background-color: var(--vf-input-bg) !important;
                            color: var(--vf-input-color) !important;
                        }
                        .vfrc-send-button, .vfrc-button {
                            background-color: var(--vf-button-bg) !important;
                            color: var(--vf-button-color) !important;
                        }
                    `;
                    iframeDoc.head.appendChild(style);
                };

                requestAnimationFrame(applyStyles);
            }
        });
    };

    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; // Updated Voiceflow CDN
    document.head.appendChild(script);

    // Particle Effect: Gold star-like particles
    const particlesContainer = document.querySelector('.particles');

    function createParticles(count) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 5 + 3;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = Math.random() * 20 + 15;
            const dx = Math.random() * 2 - 1;
            const dy = Math.random() * 2 - 1;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}vw`;
            particle.style.top = `${top}vh`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.setProperty('--dx', dx);
            particle.style.setProperty('--dy', dy);

            particlesContainer.appendChild(particle);
        }
    }

    createParticles(100);
});
