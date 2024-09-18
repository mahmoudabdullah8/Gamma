"use client"
import ConfirmModal from "@/components/confirmModal";
import ResultModal from "@/components/resultModal";
import React, { createContext, useState, ReactNode } from "react";

interface ModalOptions {
  status: "success" | "error" | null;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  closable?: boolean;
}

interface ConfirmOptions {
  open: boolean;
  title: string | null;
  subtitle: string | null;
  onOk: (() => void) | null;
  onCancel: (() => void) | null;
}

interface ResultContextType {
  success: (options: {
    title: string;
    subtitle: string;
    content?: string;
    timeout?: number;
    closable?: boolean;
  }) => void;
  error: (
    title: string,
    subtitle: string,
    content?: string,
    timeout?: number
  ) => void;
  confirm: (options: { title: string; subtitle: string }) => Promise<boolean>;
}

const ResultContext = createContext<ResultContextType | any>(null);

export function ResultContextProvider({ children }: { children: ReactNode }) {
  const [confirmOptions, setConfirmOptions] = useState<ConfirmOptions>({
    open: false,
    title: null,
    subtitle: null,
    onOk: null,
    onCancel: null,
  });
  const [modalOptions, setModalOptions] = useState<ModalOptions>({
    status: null,
    title: null,
    subtitle: null,
    content: null,
    closable: true,
  });

  function success({
    title,
    subtitle,
    content = "",
    timeout = 3000,
    closable = true,
  }: {
    title: string;
    subtitle: string;
    content?: string;
    timeout?: number;
    closable?: boolean;
  }) {
    setModalOptions({
      status: "success",
      title,
      subtitle,
      content,
      closable,
    });
    setTimeout(() => {
      close();
    }, timeout);
  }

  function error(
    title: string,
    subtitle: string,
    content: string | null = null,
    timeout: number = 3000
  ) {
    setModalOptions({
      status: "error",
      title,
      subtitle,
      content,
    });
    setTimeout(() => {
      close();
    }, timeout);
  }

  function close() {
    setModalOptions({
      status: null,
      title: null,
      subtitle: null,
      content: null,
    });
  }

  async function confirm({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }): Promise<boolean> {
    return new Promise((res, rej) => {
      setConfirmOptions({
        open: true,
        title,
        subtitle,
        onOk: () => {
          res(true);
          setConfirmOptions({
            open: false,
            title: null,
            subtitle: null,
            onOk: null,
            onCancel: null,
          });
        },
        onCancel: () => {
          rej(false);
          setConfirmOptions({
            open: false,
            title: null,
            subtitle: null,
            onOk: null,
            onCancel: null,
          });
        },
      });
    });
  }

  return (
    <ResultContext.Provider value={{ success, error, confirm }}>
      {children}
      <ResultModal
        status={modalOptions.status}
        title={modalOptions.title}
        subtitle={modalOptions.subtitle}
        content={modalOptions.content}
        close={close}
        closable={modalOptions.closable}
      />
      <ConfirmModal
        onOk={confirmOptions.onOk || (() => {})} 
        onCancel={confirmOptions.onCancel || (() => {})}
        title={confirmOptions.title}
        subtitle={confirmOptions.subtitle}
      />
    </ResultContext.Provider>
  );
}

export default ResultContext;
