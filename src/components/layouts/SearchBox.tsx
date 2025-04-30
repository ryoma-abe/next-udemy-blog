"use client";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const router = useRouter();
  return (
    <>
      <Input placeholder="記事を検索..." className="w-[200px] lg:w-[300px]" />
    </>
  );
}
