import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen"; 

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Block right click (context menu)
    const handleContextMenu = (e) => e.preventDefault();

    // Block keyboard shortcuts for inspect/devtools
    const handleKeyDown = (e) => {
      // F12
      if (e.key === "F12") e.preventDefault();
      // Ctrl+Shift+I or Cmd+Opt+I
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
          (e.metaKey && e.altKey && e.key.toLowerCase() === "i")) {
        e.preventDefault();
      }
      // Ctrl+Shift+C or Cmd+Opt+C
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") ||
          (e.metaKey && e.altKey && e.key.toLowerCase() === "c")) {
        e.preventDefault();
      }
      // Ctrl+Shift+J or Cmd+Opt+J
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") ||
          (e.metaKey && e.altKey && e.key.toLowerCase() === "j")) {
        e.preventDefault();
      }
      // Ctrl+U (View source)
      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }
    };

    // Devtools detection only on desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let checkInterval;
    if (!isMobile) {
      const checkDevTools = () => {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
          window.location.href = "/notfound";
        }
      };
      checkInterval = setInterval(checkDevTools, 600);
    }

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Splash loading timeout
    const timer = setTimeout(() => setIsLoading(false), 2700);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      if (checkInterval) clearInterval(checkInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LoadingScreen isVisible={isLoading} />
        <div className={isLoading ? "pointer-events-none select-none" : ""}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/notfound" element={<NotFound />} />
              {/* ADD CUSTOM ROUTES HERE */}
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
