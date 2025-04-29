
import { cn } from "../common/utils/cn";    
import { MobileSidebar } from "../layout/mobile-sidebar";
import Link from "next/link";
import Image from 'next/image';
import imgLogo from '/public/images/logo.png';
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Header() {
    return (
        <WalletModalProvider>
            <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b">
                <nav className="flex h-[6rem] items-center justify-between px-4 bg-[#121111]">
                    <Link
                        href={"/"}
                        className="hidden items-center justify-between gap-2 md:flex"
                    >
                        <Image src={imgLogo} alt="My Image" width={170} height={300} />
                    </Link>
                    <div className={cn("block md:!hidden")}>
                        <MobileSidebar />
                    </div>

                    <div className="flex items-center gap-2">
                        <WalletMultiButton />
                    </div>
                </nav>
            </div>
        </WalletModalProvider>
    );
}