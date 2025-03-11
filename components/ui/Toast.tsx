import React, { useState, useEffect } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  type: "success" | "error";
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  duration = 5000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <div className={`toast ${type}`}>{message}</div>;
};
