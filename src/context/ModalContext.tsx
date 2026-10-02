"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";

const StoreModal = dynamic(
  () => import("@/components/modals/StoreModal").then((mod) => mod.StoreModal),
  { ssr: false }
);

const SizeGuideModal = dynamic(
  () => import("@/components/modals/SizeGuideModal").then((mod) => mod.SizeGuideModal),
  { ssr: false }
);

interface ModalContextType {
  openStoreModal: () => void;
  openSizeGuideModal: () => void;
  closeAllModals: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openStoreModal: () => {},
  openSizeGuideModal: () => {},
  closeAllModals: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  useEffect(() => {
    // Delegated click listener for zero-JS server components with modal triggers
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "[data-modal-target], #open-store-modal-btn, #open-store-modal-intro, #open-store-modal-womens, #open-store-modal-why, #open-store-modal-faq-prompt, #open-store-modal-faq-bottom, #footer-store-modal-trigger, .modal-trigger-store, .modal-trigger-sizeguide, .footer-btn-link"
      );
      if (!target) return;

      const isStoreTrigger =
        target.id === "footer-store-modal-trigger" ||
        target.id?.includes("open-store-modal") ||
        target.classList.contains("modal-trigger-store") ||
        target.getAttribute("data-modal-target") === "store";

      const isSizeGuideTrigger =
        target.getAttribute("data-modal-target") === "size-guide" ||
        target.classList.contains("modal-trigger-sizeguide") ||
        target.classList.contains("footer-btn-link");

      if (isStoreTrigger) {
        e.preventDefault();
        setStoreModalOpen(true);
      } else if (isSizeGuideTrigger) {
        e.preventDefault();
        setSizeGuideOpen(true);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openStoreModal: () => setStoreModalOpen(true),
        openSizeGuideModal: () => setSizeGuideOpen(true),
        closeAllModals: () => {
          setStoreModalOpen(false);
          setSizeGuideOpen(false);
        },
      }}
    >
      {children}
      {storeModalOpen && (
        <StoreModal isOpen={true} onClose={() => setStoreModalOpen(false)} />
      )}
      {sizeGuideOpen && (
        <SizeGuideModal isOpen={true} onClose={() => setSizeGuideOpen(false)} />
      )}
    </ModalContext.Provider>
  );
}
