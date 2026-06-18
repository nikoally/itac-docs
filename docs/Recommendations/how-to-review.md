# How to Review a Recommendation

Reviewing recommendations is a critical quality control step that ensures technical accuracy, completeness, and professional presentation before submission to facilities. Substantive errors (calculation errors, methodology deviations, data inconsistencies) require a virtual meeting with the author to discuss corrections. Non-substantive changes (spelling, grammar, formatting) can be documented in written feedback.

## How to Review

Be thorough and constructive: check every calculation, assumption, and claim, and frame feedback as a path to better work. Follow the same order every time:

1. **Read the entire recommendation once** for overall flow and intent.

2. **Work through the High-Level Review Checklist** below for the overarching items that apply to every recommendation.

3. **Re-read each section individually** against its section-specific checklist.

**Timeline:** Complete the initial review within 3 days, schedule any virtual meeting within 2 business days, and turn around follow-up reviews within 1 business day. If you can't meet these, tell the author and your supervisor so work can be reassigned.

!!! warning
    The checkboxes on this page are clickable, but refreshing the page resets them. Do with this what you will.

## High-Level Review Checklist

These overarching items apply to the whole recommendation. The section checklists below cover only what is unique to each section.

- [ ] **Correct ARC code(s)** referenced and matches recommendation type

- [ ] **Methodology follows** the appropriate page

- [ ] **All calculations are reproducible** from stated assumptions and methodology

- [ ] **Recommendation reflects facility reality** based on assessment observations

- [ ] **Length is appropriate** (maximum 2 pages; appendix for detailed calculations if needed)

- [ ] **Tone is professional** and uses active voice

- [ ] **No vendor-specific language** (if unavoidable, 3+ options with disclaimer)

- [ ] **Utility incentives researched** and documented if applicable

- [ ] **All figures referenced** in text and properly captioned

- [ ] **Units are correct and consistent** throughout

- [ ] **Correct variables** are used where needed

- [ ] **No vague language** (avoid "approximately," "around," "about," "significant," etc.)

!!! warning "When to Schedule a Virtual Meeting"

    Any of the following is a substantive issue. Do not try to fix it in written feedback alone — schedule a virtual meeting with the author to discuss the correct approach:

    - Calculation errors or unreproducible results

    - Methodology that deviates from established guidance

    - Missing or incorrect data that affects savings estimates

    - Assumptions that don't match facility conditions observed during the assessment

    - Incomplete baseline documentation

    - Cost estimates that appear significantly incorrect

## Section-by-Section Review

### Summary

The Summary is written last, so it should synthesize the other sections accurately.

- [ ] **Four sentences:** one summarizing each main section (Current Practices, Recommended Action, Anticipated Savings, Costs and Payback)

- [ ] **Summary table present** and correctly formatted using the standard LaTeX template

- [ ] **Summary table values match** the calculations in other sections

- [ ] **Empty cells** contain two dashes (--), not left blank

- [ ] **AR number** in the table caption matches the recommendation

---

### Current Practices and Observations

This section establishes the baseline. Everything here should be verifiable from assessment data, measurements, or facility documentation.

- [ ] **Includes every facility input** used to calculate savings

- [ ] **Quantitative baseline data** is specific and complete (equipment nameplate data, measured values, operating parameters) or correctly references major consumers

- [ ] **Recommendation-specific operating hours** are clearly stated

- [ ] **Load factors** documented when relevant (e.g., motors should run at adequate load for efficiency upgrades)

- [ ] **Qualitative observations** describe physical condition, layout, and operational context

!!! warning "Baseline Documentation Standards"

    The baseline must be detailed enough that someone reading the recommendation years later can understand exactly what conditions existed before implementation. If you cannot reproduce the baseline scenario from the documentation provided, the section needs revision.

---

### Recommended Action

This section should be concise and direct.

- [ ] **Action stated clearly** in direct terms (e.g., "We recommend installing a 150 kVAR capacitor bank")

- [ ] **Specific equipment identified** with relevant specifications (HP, efficiency rating, capacity, etc.)

- [ ] **Recommended equipment matches** the capacity and specifications used in the savings calculations

- [ ] **No sourcing or installation logistics** included (facility handles procurement)

- [ ] **High-level rationale** for the recommendation is present (e.g., "This will reduce natural gas consumption by repurposing compressor waste heat for space heating.")

---

### Anticipated Savings

This is typically the longest section and requires the most careful review. Verify that calculations are mathematically correct and follow the established methodology.

- [ ] **Complex calculations** moved to the appendix **with an explicit reference**

- [ ] **All assumptions listed** explicitly (operating hours, load factors, efficiency values, etc.) and reasonable for the facility. This should not be a repetition of current practices and observations. 

- [ ] **Energy savings** presented in native units first (kWh, kW, MMBtu, Tgal)

- [ ] **Cost savings** calculated separately as the final step using the correct facility utility rates

- [ ] **Sanity checks pass:** operating hours ≤ 8,760 hrs/yr, efficiencies physically sensible (>100% only for heat pumps), and savings magnitude plausible (no "too good to be true" results)

- [ ] **Demand savings** account for seasonal/temporal variation where the methodology requires it

- [ ] **Secondary effects** included where the methodology requires them

**Calculation verification process:**

1. **Identify the measure category** and locate the corresponding methodology page.

2. **Verify methodology alignment** — compare the calculation approach to the methodology page and confirm all required formulas are used correctly.

3. **Check the math** — reproduce calculations independently from the stated inputs, verify unit conversions, and confirm intermediate results carry through correctly.

---

### Costs and Payback

This section itemizes implementation costs and calculates simple payback. Verify that cost estimates are reasonable and complete.

- [ ] **Equipment costs** itemized and sourced (quotes preferred, or industry estimates)

- [ ] **Labor costs** included with reasonable hour estimates and listed separately from equipment

- [ ] **Continuing costs** documented if applicable (maintenance, consumables, operational changes)

- [ ] **Incentives subtracted** from implementation cost before the payback calculation. If there are no incentives, the recommendations says so. 

- [ ] **Payback formula correct:** (Implementation Cost) / (Annual Savings − Continuing Costs)

- [ ] **Payback uses LaTeX format**

- [ ] **Cost estimates are reasonable** for the measure type and scale

---

## Documenting Feedback

After completing your review, sort feedback into two categories.

### Substantive Issues (Requires Virtual Meeting)

Document each issue with a specific location reference (section name, paragraph, equation number) and a note on what it is and why it matters — Overleaf comments and writing directly on the PDF output both work well. Schedule a virtual meeting to discuss; do not try to resolve calculation or methodology errors in writing alone.

> **Anticipated Savings — Cooling Effect:** The efficiency degradation is missing from your calculations as required by the [HVAC Retrofit Methodology Page](HVAC/hvac-retrofit.md), which is causing the long payback period  — let's discuss the correct approach.

### Non-Substantive Issues (Written Feedback)

For spelling, grammar, formatting, and style, use track changes or comments, be specific, and provide corrected text.

> - Page 2, ¶3: "effeciency" → "efficiency"
> - Figure 2 caption: not referenced in text — add a reference in Current Practices.
> - Table: use two dashes (--) for empty cells instead of leaving them blank.
