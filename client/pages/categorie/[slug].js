import React from "react";
import Link from "next/link";
import Head from "next/head";

function Categorie({ data, slug }) {
  return (
    <div>
      <Head>
        <title>{`Fast Food e-commerce - ${slug}`}</title>
      </Head>
      Categorie <span>{slug}</span>
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const data = [{ name: "pizza1" }, { name: "pizza2" }, { name: "pizza3" }];
  const slug = params.slug;
  return {
    props: {
      data,
      slug,
    },
  };
}

export default Categorie;
