+++
title = "Part 5 – The Machine-Learning Shift"
date = 2025-06-17
description = "Exploring the rise of machine learning in the 1990s, including key algorithms, applications, and the impact of data."
weight = 5

[taxonomies]
tags = ["Machine Learning", "AI History", "Data Science"]

[extra]
social_media_card = "/images/blogs/gscc.webp"
local_image = "/images/blogs/gscc.webp"

[extra.series_template_variables]
position = "fifth"
topic = "Machine Learning Era"
difficulty = "Beginner"
+++
<!-- Series Intro -->
---

## Executive summary

By the 1990s, AI researchers pivoted from brittle, rule-centric expert systems to statistical learning methods that could *learn* patterns directly from data.  Decision trees, Bayesian networks, and the newly-minted support-vector machine showed that algorithms, not handcrafted rules, could generalise from examples.  The same decade’s data-mining boom, the internet’s explosive growth, and IBM’s **Deep Blue** chess victory cemented machine learning (ML) as the new AI paradigm, including in India, where software-export zones such as **STPI Bhubaneswar** laid the groundwork for today’s AI ecosystem.  This post unpacks that shift, shows the mathematics behind early ML workhorses, and gives you three hands-on Colab tutorials you can run right now.

---

## 1  Introduction

The 1980s “expert-system era” (Part 4) promised to bottle human expertise as if-then rules.  Yet knowledge engineers soon hit a *knowledge-acquisition bottleneck*—rules were expensive to write, hard to maintain, and brittle in novel situations.  Meanwhile, cheap computing and exploding databases suggested a different strategy: **learn the rules from data instead of writing them by hand**.  Statistical learning theory, honed for decades in pattern recognition, finally met the data required to realise it.  As a result, the 1990s saw a decisive paradigm shift from “Knowledge is Power” to “*Data* is Power.”  That shift—our focus here—set the stage for the deep-learning renaissance of the 2010s.

---

## 2  From Hand-Crafted Rules to Learned Models

### 2.1 Paradigm comparison

| Characteristic             | Rule-Based Expert System  | Machine-Learning Model           |
| -------------------------- | ------------------------- | -------------------------------- |
| Knowledge source           | Human domain experts      | Empirical data                   |
| Scalability                | Linear in number of rules | Improves with more data          |
| Handling noise/uncertainty | Poor                      | Built-in probabilistic tolerance |
| Maintenance cost           | High (manual updates)     | Retrain or fine-tune             |

Manual knowledge engineering faltered once domains grew too complex: DEC’s **XCON** needed \~10,000 rules and a dedicated upkeep team.  By contrast, algorithms such as ID3 could ingest thousands of labelled examples and yield a decision policy automatically ([link.springer.com][1]).

#### Key ML advantages

* **Scalability** – bigger corpora improved accuracy rather than overwhelming authors.
* **Robustness** – probabilistic models degrade gracefully on edge cases.
* **Automatic feature discovery** – algorithms uncover patterns humans overlook.


{% mermaid(invertible=true, full_width=false) %}
flowchart LR
    A[Domain Experts] -->|Encode| R(Rule Base)
    R -->|Inference| O[Outputs]

    subgraph ML_Workflow
        D[Raw Data] --> P[Pre-processing]
        P --> T[Train Algorithm]
        T --> M[Model]
        M --> O2[Outputs]
    end

    classDef manual fill:#f8d7da;
    class R,A manual;
{% end %}

Rule vs ML workflow (Flowchart contrasting manual rule entry with automated training loop”)

#### Tiny code taste

```python
# Rule: if temp > 37.5°C then "fever"
def rule_based(temp): 
    return "fever" if temp > 37.5 else "normal"

# Learned logistic-regression model
from sklearn.linear_model import LogisticRegression
import numpy as np
X = np.array([[36.8],[38.2],[37.0],[39.1]])
y = np.array([0,1,0,1])          # 1 = fever
clf = LogisticRegression().fit(X,y)
print(clf.predict([[37.6]]))      # → array([1])
```

---

## 3  Early ML Algorithms & Successes

### 3.1 Decision Trees (ID3 → C4.5)

ID3 introduced entropy-based node splitting ([link.springer.com][1]).  C4.5 generalised it to handle continuous features and pruning ([link.springer.com][2]).

```python
from sklearn import tree, datasets
dt = tree.DecisionTreeClassifier(criterion="entropy", max_depth=3)
iris = datasets.load_iris()
dt.fit(iris.data, iris.target)
tree.plot_tree(dt)   # visualises splits
```

{% mermaid(invertible=true, full_width=false) %}
graph TD
    S1["sepal_len ≤ 5.45?"] -->|yes| C1[Leaf: setosa]
    S1 -->|no| S2["petal_len ≤ 2.45?"]
    S2 -->|yes| C2[Leaf: versicolor]
    S2 -->|no| C3[Leaf: virginica]
{% end %}

Example decision tree (Toy tree splitting on sepal length/width)

### 3.2 Bayesian Networks

Pearl’s 1988 treatise revived probabilistic reasoning ([amazon.com][3]).  By the mid-1990s, BN-powered diagnostic tools predicted liver disorders with clinically useful accuracy ([citeseerx.ist.psu.edu][4], [cs.ru.nl][5]).

### 3.3 Support Vector Machines (SVM)

Cortes & Vapnik’s 1995 paper formalised margin maximisation ([link.springer.com][6]).  The *kernel trick* let linear algebra solve non-linear problems in high-dimensional feature spaces.

```python
from sklearn.svm import SVC
svc = SVC(kernel='rbf', C=1.0, gamma='scale')
svc.fit(X, y)
```

### 3.4 IBM Deep Blue (1997)

Deep Blue’s 32-node RS/6000 SP supercomputer evaluated 200 M positions/s ([ibm.com][7]).  After losing Game 1, it defeated Kasparov 3½-2½, a watershed media moment for AI ([wired.com][8]).


{% mermaid(invertible=true, full_width=false) %}
graph LR
    A((+)) ---|support| H[Hyper-plane] --- B((-))
{% end %}

*SVM margin diagram (Two-class points, widest separating hyper-plane)*


---

## 4  AI in the 90 s – Real-World Applications

* **Credit scoring** – Neural nets cut default rates in US credit-union data ([sciencedirect.com][9]).  Indian banks began pilot scoring systems late-decade ([researchgate.net][10]).
* **Market-basket analysis** – Agrawal & Srikant’s 1994 *Apriori* algorithm extracted shopping patterns an order of magnitude faster than predecessors ([vldb.org][11], [ibm.com][12]).
* **Customer segmentation** – Decision-tree ensembles boosted telco churn prediction accuracy.
* **Web search** – AltaVista’s crawler fuelled TF-IDF ranking; Google’s PageRank (1998) soon leveraged link structure.
* **Recommenders** – Amazon (1998) deployed item-to-item collaborative filtering, an association-rule cousin.


{% mermaid(invertible=true, full_width=false) %}
graph LR
    FIN[Finance] -- SVM / NNs --> CREDIT[Risk Scoring]
    RET[Retail] -- Apriori --> BASKET[Association Rules]
    WEB[Web] -- Crawlers --> SEARCH[Search Engines]
    TEL[Telecom] -- Trees --> CHURN[Churn Prediction]
{% end %}

1990's AI ecosystem (Nodes for Finance, Retail, Web, Telecom connected to ML methods)

---

## 5  Indian Context

### 5.1 IT-services boom

India’s software exports rocketed from \$175 M in 1990 to \$8.7 B by 2000—>50 % CAGR ([faculty.washington.edu][13]).  Bangalore earned “Silicon Valley of India” status ([wired.com][14]).

### 5.2 Early AI adoption

* *Banking* – ICICI experimented with neural-network loan risk models.
* *Agriculture* – prototype decision support systems helped optimise irrigation and pest control ([researchgate.net][15]).
* *Education* – IITs and IISc rolled out elective ML courses by 1998.

### 5.3 Odisha spotlight

The **Software Technology Park of India (STPI), Bhubaneswar** opened in 1990, creating a data-link hub and incubation programmes that later hosted regional AI startups ([bhubaneswar.stpi.in][16]).


{% mermaid(invertible=true, full_width=false) %}
timeline
    title India’s Tech Evolution 1990-1999
    1990 : STPI Bhubaneswar founded
    1991 : Economic Liberalisation
    1993 : VSNL brings public Internet
    1995 : NASSCOM push on software exports
    1998 : IT Act drafted
{% end %}

*India’s tech-ecosystem timeline (1991 Liberalisation → 1993 Internet → 1998 IT Act etc.)*

---

## 6  Hands-On Demo Section

All three tutorials are available as Colab notebooks; click “Open in Colab,” run, and experiment with the sliders.

| Tutorial                     | Colab Link                                                                                           | Key Concepts                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Decision Tree Classifier     | <[https://colab.research.google.com/drive/](https://colab.research.google.com/drive/)<your-copy-id>> | Entropy, pruning, decision boundaries |
| Naïve Bayes Text Spam Filter | <[https://colab.research.google.com/drive/](https://colab.research.google.com/drive/)<your-copy-id>> | Bag-of-words, Laplace smoothing       |
| Support Vector Machine       | <[https://colab.research.google.com/drive/](https://colab.research.google.com/drive/)<your-copy-id>> | Kernels, margin, cross-validation     |

### 6.1 Decision Tree – Iris demo

```python
!pip install scikit-learn==1.5 pandas matplotlib ipywidgets -q
from sklearn import tree, datasets
from ipywidgets import interact, IntSlider
iris = datasets.load_iris()
X, y = iris.data[:, :2], iris.target        # sepal dims only

def train(max_depth=3):
    clf = tree.DecisionTreeClassifier(max_depth=max_depth, criterion="entropy")
    clf.fit(X, y)
    print(f"Depth {max_depth} accuracy:", clf.score(X, y))
interact(train, max_depth=IntSlider(1,1,10));
```

*Extension*: try `max_depth=None` and note over-fitting warning.

### 6.2 Naïve Bayes – Spam detection

```python
from sklearn.datasets import fetch_openml
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report
emails = fetch_openml("spam_base", version=1, as_frame=True)
X_train, X_test, y_train, y_test = train_test_split(
        emails.data['text'], emails.target, test_size=0.2, random_state=42)
model = Pipeline([("vec", CountVectorizer(stop_words='english')),
                  ("nb", MultinomialNB(alpha=1.0))])
model.fit(X_train, y_train)
print(classification_report(y_test, model.predict(X_test)))
```

*Try This*: adjust `alpha` with a slider (`FloatSlider`) and watch precision-recall shift.

### 6.3 SVM – Kernel playground

```python
from sklearn import svm, datasets
from mlxtend.plotting import plot_decision_regions
import matplotlib.pyplot as plt
X, y = datasets.make_moons(noise=0.3, random_state=0)
def plot(kernel='rbf', C=1.0):
    clf = svm.SVC(kernel=kernel, C=C).fit(X, y)
    plot_decision_regions(X, y, clf=clf)
    plt.title(f"SVM boundary ({kernel}, C={C})")
interact(plot, kernel=['linear','rbf','poly'], C=(0.1,10,0.1));
```

*Common Pitfall*: Large `C` overfits; observe jagged boundaries.

---

## Learning Checkpoints

> **Concept Check 1:** Why does entropy guide decision-tree splits better than simple accuracy?
> **Concept Check 2:** How does the kernel trick avoid computing in infinite-dimensional space?

> **Common Pitfall:** Treating Naïve Bayes independence assumption as gospel—watch for correlated features.

---

## Assessment

1. **Quiz:** What property of SVMs maximises generalisation?
2. **Coding challenge:** Replace Iris with Wine dataset and repeat Tutorial 1.
3. **Case study prompt:** Argue whether Deep Blue was *really* “AI.” Support with 1990s definitions.

Solutions are included at the bottom of each Colab notebook.

---

## Preparing for Part 6

Statistical learning solved many 1990s problems, yet hand-crafted features were still king.  Next time we’ll see how *representation learning* and neural networks staged a comeback, giving birth to deep learning.

---
<!-- Series Outro -->
---

### Citations

1. Quinlan, “Induction of Decision Trees,” *Machine Learning* 1986 ([link.springer.com][1])
2. Quinlan, *C4.5: Programs for Machine Learning* 1993 ([link.springer.com][2])
3. Cortes & Vapnik, “Support-Vector Networks,” 1995 ([link.springer.com][6])
4. IBM, “Deep Blue” history page ([ibm.com][7])
5. Wired, “Machine Bests Man” (May 1997) ([wired.com][8])
6. Agrawal & Srikant, “Fast Algorithms for Mining Association Rules,” VLDB 1994 ([vldb.org][11])
7. IBM Think topic: Apriori algorithm explainer ([ibm.com][12])
8. Mathur, “Indian IT Industry: Past, Present and Future,” 2006 ([faculty.washington.edu][13])
9. Wired, “Bangalore: Silicon Valley of India,” 1996 ([wired.com][14])
10. STPI Bhubaneswar official site ([bhubaneswar.stpi.in][16])
11. KIIT history page ([kiit.ac.in][17])
12. Lucas, “Bayesian Networks in Medicine,” 1990s survey ([cs.ru.nl][5])
13. Pearl, *Probabilistic Reasoning in Intelligent Systems* 1988 ([amazon.com][3])
14. Bayesian liver-diagnosis prototype ([citeseerx.ist.psu.edu][4])
15. Credit-scoring neural network study ([sciencedirect.com][9])
16. Market-basket analysis review ([clei.org][18])
17. Indian bank scoring models survey ([researchgate.net][10])
18. Agriculture DSS successes ([researchgate.net][15])

---

*Happy learning – see you in Part 6!*

[1]: https://link.springer.com/article/10.1007/BF00116251?utm_source=odishaai.org "Induction of decision trees | Machine Learning"
[2]: https://link.springer.com/article/10.1007/BF00993309?utm_source=odishaai.org "C4.5: Programs for Machine Learning by J. Ross Quinlan. Morgan ..."
[3]: https://www.amazon.com/Probabilistic-Reasoning-Intelligent-Systems-Representation/dp/1558604790?utm_source=odishaai.org "Probabilistic Reasoning in Intelligent Systems: Networks of ..."
[4]: https://citeseerx.ist.psu.edu/document?doi=9640fd2100908599d1e9e28ee3c2b3cdd1a0d3f4&repid=rep1&type=pdf&utm_source=odishaai.org "[PDF] A Bayesian Network Model for Diagnosis of Liver Disorders"
[5]: https://www.cs.ru.nl/~peterl/eunite.pdf?utm_source=odishaai.org "[PDF] Bayesian Networks in Medicine: a Model-based Approach to ..."
[6]: https://link.springer.com/article/10.1007/BF00994018?utm_source=odishaai.org "Support-vector networks | Machine Learning"
[7]: https://www.ibm.com/history/deep-blue?utm_source=odishaai.org "Deep Blue - IBM"
[8]: https://www.wired.com/2011/05/0511ibm-deep-blue-beats-chess-champ-kasparov?utm_source=odishaai.org "May 11, 1997: Machine Bests Man in Tournament-Level Chess Match"
[9]: https://www.sciencedirect.com/science/article/abs/pii/0377221795002464?utm_source=odishaai.org "A comparison of neural networks and linear scoring models in the ..."
[10]: https://www.researchgate.net/publication/318482256_Indian_Banks_and_Credit_Scoring_Models_An_Empirical_Study?utm_source=odishaai.org "(PDF) Indian Banks and Credit Scoring Models …..An Empirical Study"
[11]: https://www.vldb.org/conf/1994/P487.PDF?utm_source=odishaai.org "[PDF] Fast Algorithms for Mining Association Rules - VLDB Endowment"
[12]: https://www.ibm.com/think/topics/apriori-algorithm?utm_source=odishaai.org "What is the Apriori algorithm? - IBM"
[13]: https://faculty.washington.edu/karyiu/confer/seoul06/papers/mathur.pdf?utm_source=odishaai.org "[PDF] Indian Information Technology Industry : Past, Present and Future& ..."
[14]: https://www.wired.com/1996/02/bangalore?utm_source=odishaai.org "Bangalore"
[15]: https://www.researchgate.net/publication/221916044_Decision_Support_Systems_in_Agriculture_Some_Successes_and_a_Bright_Future?utm_source=odishaai.org "Decision Support Systems in Agriculture: Some Successes and a ..."
[16]: https://bhubaneswar.stpi.in/en?utm_source=odishaai.org "STPI - Bhubaneswar - Software Technology Park of India"
[17]: https://kiit.ac.in/about/history/?utm_source=odishaai.org "History of KIIT"
[18]: https://www.clei.org/cleiej/index.php/cleiej/article/download/497/413?utm_source=odishaai.org "[PDF] Market basket analysis with association rules in the retail sector ..."
