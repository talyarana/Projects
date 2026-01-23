# 📉 Reducing Customer Loss Through Predictive Analytics  
> Churn prediction, model comparison, and explainable ML for Omni Company

---

## 📌 Executive Summary

This project applies **predictive analytics and machine learning** to identify customers at risk of churn for **Omni Company**, using a large-scale telecom-style dataset containing **50,000 customer records and 35 variables**.

Multiple models were trained, tuned, evaluated, and interpreted to balance **predictive performance, business usability, and explainability**. The final solution highlights **XGBoost** as the most suitable model for operational deployment, supported by **SHAP and LIME** for transparency.

---

## 🔎 Business Context

Customer churn represents a direct revenue and growth risk. Omni’s dataset captures demographic, behavioural, financial, contractual, and service-interaction signals that can be leveraged to **proactively intervene before cancellation occurs**.

**Key question:**
> How can predictive modelling be used to accurately identify at-risk customers while remaining interpretable and business-ready?

---

## 🎯 Objectives

- Explore churn patterns using EDA  
- Prepare and engineer features for robust modelling  
- Train and compare multiple predictive models  
- Optimise models using cross-validation and tuning  
- Interpret predictions using SHAP and LIME  
- Recommend a deployable churn model for Omni  

---

## 📂 Dataset Overview

- **Size:** 50,000 customers  
- **Target:** `Churn` (0 = No, 1 = Yes)  
- **Class distribution:**  
  - 74% non-churn  
  - 26% churn  

**Feature groups include:**
- Demographics (Age, Gender, IncomeTier, Region)  
- Contract & billing (ContractLength, MonthlyCharges, AutoPay, Delinquency)  
- Engagement (TenureMonths, LoginsLastMonth, RFMScore, UsageChangePct)  
- Support & service (TicketsOpened, ResolutionTime, ComplaintCategory)  

---

## 📊 Exploratory Data Analysis (EDA)

Key observations:
- Strong **class imbalance**, requiring careful metric selection  
- Higher churn among **short-tenure** customers  
- Billing pressure, usage volatility, and service issues strongly associated with churn  

- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Churn%20Distribution.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Correlation%20Heatmap.png" width="400"/>

---

## ⚙️ Data Preparation & Feature Engineering

- Missing values handled using **median (numerical)** and **mode (categorical)** imputation  
- Extensive standardisation of categorical variables  
- One-hot encoding (114 final features)  
- Outliers capped using the **IQR method**  
- Engineered features:
  - `AvgChargesPerMonth`
  - `RecentActivityIndex`
---

## 🤖 Predictive Models Implemented

The following models were trained and evaluated:

- Logistic Regression  
- Decision Tree  
- Support Vector Machine (RBF)  
- Artificial Neural Network (MLP)  
- Random Forest  
- XGBoost  

Each model was assessed using **Accuracy, Precision, Recall, F1-score, and ROC–AUC**.

---

## 📈 Model Evaluation & Performance

### Confusion Matrices
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Logistic%20Regression%20Confusion%20Matrix.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Decision%20Tree%20Confusion%20Matrix.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/SVM%20Confusion%20Matrix.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/ANN%20Confusion%20Matrix.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Random%20Forest%20Confusion%20Matrix.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/XGBoost%20Confusion%20Matrix.png" width="400"/>


### ROC Curves

- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Logistic%20Regression%20ROC%20Curve.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Decision%20Tree%20ROC%20Curve.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/SVM%20ROC%20Curve.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/ANN%20ROC%20Curve.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Random%20Forest%20ROC%20Curve.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/XGBoost%20ROC%20Curve.png" width="400"/>


### Model Comparison
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Model%20Comparison.png" width="700"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Model%20Suitability.png" width="700"/>


**Key result:**  
XGBoost achieved the strongest overall performance, offering the best trade-off between identifying churners and limiting false positives.

---

## 🔧 Hyperparameter Tuning

- GridSearchCV with **Stratified K-Fold Cross-Validation**  
- ROC–AUC used as the optimisation metric  

- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Hyperparameter%20Tuning.png" width="700"/>


---

## 🧠 Feature Importance & Explainability

### Global Importance
- Random Forest and XGBoost highlighted:
  - TenureMonths  
  - PaymentDelinquencyStatus  
  - CompetitorIndex  
  - MonthlyCharges  
  - TicketsOpened  

- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Random%20Forest%20Feature%20Importance%20.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/XGBoost%20Feature%20Importance.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Global%20SHAP%20Bar%20Plot.png" width="400"/>
- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/SHAP%20Beeswarm%20Plot.png" width="400"/>


### Local Interpretability
- LIME used to explain individual churn predictions  
- Demonstrates how billing issues, engagement decline, and service problems interact at customer level  

- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/LIME%20Explanation.png" width="700"/>


---

## ✂️ Feature Selection

A **Top-20 feature model** was built using:
- Random Forest importance  
- SHAP global importance  
- Permutation (LOO) importance  

Performance remained nearly identical to the full model, improving **interpretability and deployability**.

- <img src="https://github.com/talyarana/Projects/blob/main/Churn-Prediction/Output/Feature%20Selection.png" width="700"/>


---

## 🧠 Key Insights

- Churn is driven primarily by **behavioural and financial signals**, not demographics  
- Payment delinquency and contract flexibility are critical churn triggers  
- Declining engagement provides early warning signals  
- Ensemble models outperform linear and deep models in this context  

---

## 📌 Business Recommendations

- Deploy **XGBoost (Top-20 feature version)** for churn scoring  
- Trigger retention workflows based on delinquency and engagement decline  
- Prioritise service recovery for customers with repeated support issues  
- Use explainability tools to support trust and actionability  

---

## 🛠️ Tools & Technologies

- Python (scikit-learn, XGBoost, SHAP, LIME)  
- Exploratory Data Analysis  
- Supervised Machine Learning  
- Model explainability & feature selection  

---

