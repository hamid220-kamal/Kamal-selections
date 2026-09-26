"use client";

import { useState } from "react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<"womens" | "kids">("womens");

  return (
    <div className={`modal ${isOpen ? "active" : ""}`} id="size-guide-modal" aria-hidden={!isOpen}>
      <div className="modal-backdrop" id="size-guide-backdrop" onClick={onClose}></div>
      <div className="modal-card modal-lg">
        <button className="modal-close" id="close-size-guide-modal" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header text-center">
          <h3 className="modal-title">Kamal Selections Size Chart</h3>
          <p className="modal-sub">Find your perfect fit for Women's &amp; Kids' Wear</p>
        </div>
        <div className="modal-body">
          <div className="size-tabs">
            <button
              className={`size-tab ${activeTab === "womens" ? "active" : ""}`}
              onClick={() => setActiveTab("womens")}
            >
              Women's Clothing
            </button>
            <button
              className={`size-tab ${activeTab === "kids" ? "active" : ""}`}
              onClick={() => setActiveTab("kids")}
            >
              Kids Wear (By Age)
            </button>
          </div>

          {activeTab === "womens" ? (
            <div className="size-content active" id="tab-womens">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Bust (inches)</th>
                    <th>Waist (inches)</th>
                    <th>Hip (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S (36)</td><td>36"</td><td>30"</td><td>38"</td></tr>
                  <tr><td>M (38)</td><td>38"</td><td>32"</td><td>40"</td></tr>
                  <tr><td>L (40)</td><td>40"</td><td>34"</td><td>42"</td></tr>
                  <tr><td>XL (42)</td><td>42"</td><td>36"</td><td>44"</td></tr>
                  <tr><td>XXL (44)</td><td>44"</td><td>38"</td><td>46"</td></tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="size-content active" id="tab-kids">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Age Group</th>
                    <th>Chest (inches)</th>
                    <th>Height (cm)</th>
                    <th>Recommended Fit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 – 2 Years</td><td>20" - 21"</td><td>85 - 92 cm</td><td>XS Kids</td></tr>
                  <tr><td>3 – 4 Years</td><td>22" - 23"</td><td>98 - 104 cm</td><td>S Kids</td></tr>
                  <tr><td>5 – 6 Years</td><td>24" - 25"</td><td>110 - 116 cm</td><td>M Kids</td></tr>
                  <tr><td>7 – 9 Years</td><td>26" - 28"</td><td>122 - 134 cm</td><td>L Kids</td></tr>
                  <tr><td>10 – 12 Years</td><td>29" - 31"</td><td>140 - 152 cm</td><td>XL Kids</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
