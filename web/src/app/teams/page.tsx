"use client"

import { useAppContext } from "@/context/AppContext";
import { Metadata } from "next";
import { useEffect } from "react";

export default function Teams(props: any) {
  const { value, setValue } = useAppContext();
  useEffect(() => {
    setValue({ ...value, activeTitle: "Teams" });
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen">Teams</div>
  );
}

