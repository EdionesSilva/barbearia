"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useSession } from "next-auth/react";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
    const { data, status } = useSession();

    return (
        <header>
            <Card>
                <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
                    <Link href="/">
                        <Image src="/logo-etech.png" alt="E-Tech Barber" height={22} width={120} />
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <MenuIcon size={18} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="p-0">
                            <SideMenu />
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </header>
    );
}

export default Header;