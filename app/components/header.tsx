import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useLogout, useSignerStatus } from "@account-kit/react";
import Image from "next/image";

export default function Header() {
  const { logout } = useLogout();
  const { isConnected } = useSignerStatus();

  return (
    <header className="border-b/0 bg-white/5 dark:bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/assets/brand-logo.png" alt="OpsVantage Digital" width={180} height={36} className="h-9 w-auto" />
        </div>

        {isConnected && (
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-primary hover:text-primary-foreground"
            onClick={() => logout()}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        )}
      </div>
    </header>
  );
}
