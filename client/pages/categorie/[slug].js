import React from "react";
import { useRouter } from "next/dist/client/router";

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
