import { ModeProvider } from "./_Context/ModeContext";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // ✅ strings
});

export const metadata = {
  title: {
    template: "%s | Muhammad Usman -Dev",
    default: "Muhammad Usman -Dev",
  },
  description:
    "Muhammad Usman -Developer ,  a Full time freelancer on fiverr and upwork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  `}>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
