---
title: "Production Line Automation"
excerpt: "Material category is not fixed. Any kind of FG material will come on conveyer."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Aarkay Techno Consultants Pvt Ltd
  picture: "/svgs/aarkay.png"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## Customer Challenges:

- Material category is not fixed. Any kind of FG material will come on conveyer.

## Solutions:

- We successfully automated total three production lines which were completely unmanned system.

- Software Integrated with Industrial Barcode Reader, Weighing Conveyer, Rejection Conveyer, Direct Carton printing printer and DB server.

- The overall system operates as follows:-

  - Firstly FG-material carton coming over conveyer, an Industrial Barcode reader which is mount on conveyer reads EAN code of material for product identification.

  - System automatically gets that EAN code and ready for material wise weight validation.

  - If material EAN code not scanned/reads by reader then the system will automatically send command to rejection conveyer to reject unscanned carton.

  - Otherwise weighing conveyer gives weight of carton and system validates weight with defined threshold and if weight is invalid, system automatically send command to rejection conveyer to reject over/under weighted carton as per material.

  - And If weight is valid then system sends printing command to online direct carton printing printer to print the data with unique carton barcode.

- We achieved speed of twelve cartons per min. on-line
