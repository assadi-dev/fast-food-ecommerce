import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Categorie() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      Categorie <span>{slug}</span>
    </div>
  );
}

export default Categorie;
