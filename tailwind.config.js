module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                shaking: {
                    "0%": {
                        transform: "rotate(20deg)",
                    },
                    "50%": {
                        transform: "rotate(-20deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                ringging: {
                    "0%": {
                        transform: "rotate(-40deg)",
                    },
                    "50%": {
                        transform: "rotate(20deg)",
                    },
                },
                flip: {
                    from: {
                        transform: "rotateX(0deg)",
                    },
                    to: {
                        transform: "rotateX(-360deg)",
                    },
                },
            },
            animation: {
                shaking: "shaking 2s infinite alternate",
                ringging: "ringging 1s infinite alternate",
                flip: "flip 2s infinite linear ",
            },
            screens: {
                xxs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
