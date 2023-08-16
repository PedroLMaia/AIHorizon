import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page(Nao protegida!)
      <div>
        <Link href="/login">
          <Button>
            Login
          </Button>
        </Link>
        <Link href="/registre-se">
          <Button>
            Registre-se
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
