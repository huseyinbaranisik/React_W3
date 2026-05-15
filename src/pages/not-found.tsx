import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-md mx-4 bg-card border-border">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <div className="flex mb-4 gap-2 items-center justify-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
            <h1 className="text-3xl font-bold text-foreground">404</h1>
          </div>
          <p className="text-xl font-medium text-foreground mb-2">Sayfa Bulunamadı</p>
          <p className="mt-2 text-sm text-muted-foreground mb-6">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Link 
            to="/" 
            className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}