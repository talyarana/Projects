# 🌍 Strategic Data Analytics & Visualisation for SDG 3 (Ireland)
> Evidence-based insights for public health policy, equity, and resource allocation

---

## 📌 Executive Summary

This project develops an interactive visual analytics system to monitor Ireland’s progress towards **UN Sustainable Development Goal 3 (Good Health & Well-being)**.

Using official public health data from the **Central Statistics Office (CSO)** and **Health Research Board (HRB)** spanning **2010–2024**, the project transforms fragmented datasets into **decision-ready insights** through high-fidelity **Power BI dashboards**, supporting evidence-based policy and resource allocation for the **Health Service Executive (HSE)**.

The analysis focuses on three SDG 3 targets:
- **Target 3.4** – Non-communicable disease (NCD) mortality  
- **Target 3.5** – Substance misuse (alcohol and illicit drugs)  
- **Target 3.8** – Universal health coverage and financial protection  

---

## 🔎 Policy & Public Health Context

Ireland’s public health data is comprehensive but often under-utilised for operational decision-making due to fragmentation across sources and formats. This project addresses that gap by integrating, analysing, and visualising health indicators to move beyond national averages and expose **demographic and geographic inequities**.

**Key question:**
> How can integrated public health data be visualised to support equitable, targeted, and evidence-based health policy in Ireland?

---

## 🎯 Project Objectives

- Analyse age, gender, and county-level disparities in mortality  
- Identify dominant causes of death and long-term NCD trends  
- Map alcohol and drug treatment demand across Ireland  
- Examine shifts in Medical Card vs GP Visit Card coverage  
- Assess risks of catastrophic household health expenditure  
- Deliver an interactive Power BI dashboard aligned to SDG 3 indicators  

---

## 📂 Data Sources

All datasets were sourced from official Irish public bodies:

- **Central Statistics Office (CSO)**
  - Mortality statistics (cause, age, gender, county)
  - Primary Care Reimbursement Service (PCRS)
  - Household health expenditure data

- **Health Research Board (HRB)**
  - National Drug Treatment Reporting System (NDTRS)

Time coverage: **2010–2024**

---

## ⚙️ Analytical Workflow

1. Data extraction from multiple CSO and HRB sources  
2. Data cleaning and county-level standardisation  
3. ETL pipeline with longitudinal (time-series) merging  
4. Creation of derived metrics (mortality rate, coverage ratios)  
5. Descriptive and diagnostic analysis  
6. Interactive dashboard development in Power BI  

---

## 📊 Key Analytical Insights

### 1️⃣ Mortality Patterns & Age Risk

Mortality risk increases exponentially with age. The **65+ population faces a 23× higher mortality risk** compared to the working-age population.

Leading causes of death are consistent nationwide:
- Diseases of the circulatory system  
- Neoplasms (cancers)

`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Cause%20of%20Death%20by%20Age%20.png`

---

### 2️⃣ Gender & Cause-Specific Disparities

Across almost all NCDs and external causes, **male mortality exceeds female mortality**. This persistent gap suggests delayed healthcare-seeking behaviour and higher exposure to behavioural risk factors among males.
 
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Deaths%20by%20Gender%20and%20Causes%20.png`

---

### 3️⃣ Geographic Distribution of Deaths

While high death volumes are concentrated in populous counties (e.g. Dublin and Cork), rate-based analysis reveals deeper insights:
- Mortality risk profiles are nationally consistent  
- Healthcare service demand is spatially concentrated in urban centres  
 
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Deaths%20County%20Council%20wise.png`  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Occurring%20of%20Death%20.png`  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Deaths%20Registered.png`

---

### 4️⃣ Substance Misuse: Alcohol vs Illicit Drugs

Substance misuse patterns are highly segmented:
- Alcohol misuse is widespread with regional variation  
- Illicit drug treatment demand is concentrated in urban areas  
- Males account for over **70% of drug treatment cases**

Cocaine has emerged as a major urban substance risk, particularly in Dublin.

**Visuals:**  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Alcohol%20treatment%20dashboard.png`  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Drug%20treatment%20dashboard.png`

---

### 5️⃣ Universal Health Coverage & Policy Shifts

Analysis of PCRS data reveals a major policy shift:
- Medical Card holders declined by ~15%  
- GP Visit Card holders increased by over **360%** (2013–2022)

This reflects expanded access policies but raises concerns around true financial protection once patients enter the healthcare system.

**Visuals:**  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Global%20Health%20Expenditure%20.png`  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Time-series%20data%202013%2C%202021%2C%202022.png`

---

### 6️⃣ Equity, Demographics & Financial Risk

Coverage analysis shows:
- Higher Medical Card ownership among females  
- Bi-modal age concentration (0–4 and 75+)  
- Significant county-level variation in GPVC/MC ratios  

Out-of-pocket costs (e.g. dental care, prescriptions) remain a persistent financial risk despite expanded GP access.

**Visuals:**  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/Gender%20and%20Age%20Group%20data.png`  
`https://github.com/talyarana/Projects/blob/main/Strategic%20PowerBI%20Dashboard/Output/County%20Level%20Data.png`

---

## 🧠 Policy & Strategic Value

This project enables policymakers to:
- Identify where health risks are concentrated  
- Distinguish between volume-driven and vulnerability-driven demand  
- Design targeted, localised interventions  
- Monitor whether access policies translate into real financial protection  

---

## ⚠️ Limitations

- Confidentiality suppression in NDTRS slightly undercounts rural cases  
- No treatment outcome or relapse data available  
- Limited socioeconomic granularity at sub-county level  

---

## 🔮 Future Enhancements

- Integration of treatment outcomes and relapse rates  
- Socioeconomic equity analysis at finer geographic resolution  
- Predictive risk modelling  
- Real-time dashboard updates  

---

## 🛠️ Tools & Technologies

- **Microsoft Power BI** (DAX, interactive dashboards)  
- **Excel / CSV ETL pipelines**  
- Descriptive and diagnostic analytics  
- Geospatial and compositional visualisation  

