import React from "react";
import { Worker, Viewer, ScrollMode } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

import Header from "./Header";
import Footer from "./Footer";

function Katalog() {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { GoToNextPageButton, GoToPreviousPageButton } = pageNavigationPluginInstance;

  return (
    <>
      <Header />
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          {/* PDF Görüntüleyici */}
          <div
            style={{
              width: "60%",
              height: "75vh",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <Viewer
              fileUrl="/pdfs/denateknik.pdf"
              plugins={[pageNavigationPluginInstance]}
              scrollMode={ScrollMode.SinglePage} // Sadece 1 sayfa göster
              defaultScale={1} // Sayfa boyutu normal
            />
          </div>

          {/* Ok Butonları */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
              gap: "50px",
            }}
          >
            <GoToPreviousPageButton>
              {(props) => (
                <button
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                  style={{
                    background: "#f8f8f8",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    fontSize: "20px",
                    cursor: props.isDisabled ? "not-allowed" : "pointer",
                  }}
                >
                  ◀
                </button>
              )}
            </GoToPreviousPageButton>

            <GoToNextPageButton>
              {(props) => (
                <button
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                  style={{
                    background: "#f8f8f8",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    fontSize: "20px",
                    cursor: props.isDisabled ? "not-allowed" : "pointer",
                  }}
                >
                  ▶
                </button>
              )}
            </GoToNextPageButton>
          </div>
        </Worker>
      </div>
      <Footer />
    </>
  );
}

export default Katalog;
