---
title: "Guide to Contributing with Pull Requests in Famdesc"
description: "Learn how to create effective Pull Requests that align with our development practices at Famdesc."
author: "Nardis"
role: "Founder & Developer, Famdesc"
authorImage: "@/images/blog/nardis.avif"
authorImageAlt: "Author photo of Nardis"
pubDate: 2024-08-09
cardImage: "@/images/blog/post-2.avif"
cardImageAlt: "Banner of pull requests in Famdesc"
readTime: 6
tags: ["Git", "Open Source", "Collaboration", "Pull Requests"]
contents: [""]
---

A **Pull Request (PR)** is a request to merge code changes from one branch (usually a feature or bugfix branch) into the project's main repository. At **Famdesc**, Pull Requests (PRs) are an essential part of the development workflow. They are the means by which proposed changes in the code are reviewed, discussed, and eventually integrated into the main codebase. To ensure that our PRs are clear, effective, and easy to review, we follow a specific format and best practices.

#### Benefits of Pull Requests

- **Collaboration and Transparency:** PRs foster collaboration among team members, allowing multiple developers to review and comment on the proposed changes. This not only improves code quality but also increases transparency in the development process.
- **Early Detection of Errors:** Through the review process, it is more likely to catch errors, inconsistencies, or design issues before the code is merged into the main branch, reducing the risk of introducing bugs into production.
- **Documentation of Development Process:** Each PR acts as a piece of documentation that records the reasoning behind the changes, the discussions that took place, and the decisions made. This is useful for future reference and for new team members.
- **Quality Control:** Allowing other developers to review the code ensures that quality standards are maintained and that the code meets the project's guidelines and conventions.

#### Best Practices for Creating Pull Requests

- **Small, Focused Changes:** It is recommended that each PR addresses a single issue or problem. This makes it easier to review and understand the changes.
- **Clear and Concise Description:** Provide a detailed description of the purpose of the PR, including what problem it solves and how it solves it. If applicable, include references to issue tickets or specifications.
- **Include Tests:** Ensure that any changes to the code are accompanied by the corresponding tests. This helps validate that the code works as expected and does not introduce errors.
- **Request Specific Reviews:** Tag team members with relevant knowledge to review the PR, ensuring a more effective and faster review.

#### Pull Request Review Process

1. **Code Review:** Review the code line by line, ensuring it follows the project's coding standards and does not introduce errors or vulnerabilities.
2. **Testing and Validation:** Run all associated tests to ensure that the changes do not break any existing functionality.
3. **Discussion and Feedback:** Comment on possible improvements, request changes if necessary, and discuss alternatives with the PR author.
4. **Approval and Merge:** Once the PR has been approved by the required reviewers and all tests have passed, it can be merged into the project's main branch.

#### Automation in Pull Requests

Tools like CI/CD can be integrated with the PR workflow to automate the execution of tests, code analysis, and other checks before merging. This helps ensure that only high-quality code reaches the main branch.

### Pull Request Template

Using the correct template ensures that the proposed changes are presented in a clear and organized manner. Each PR should follow this structure:

```markdown
## General Description

[Brief description of the proposed changes, providing context and the overall goal of the PR.]

## Change Details

- **[Specific Area]:** [Detailed description of the change made.]
- **[Another Specific Area]:** [Detailed description of another change made.]

## Motivation and Context

[Explanation of why the changes were made, detailing the motivation behind them and how they affect the project.]

## Instructions for Testing

1. [First step to test the changes.]
2. [Second step to test the changes.]
3. [Any additional necessary steps.]

## Additional Notes

[Any additional information that may be useful for reviewers, such as warnings, limitations, or relevant technical details.]

## Related Issues

- [#Issue number related (if applicable).]

## Screenshots

[Include screenshots of the changes if applicable, especially for UI changes.]
```

**Example**:

#### General Description

This pull request adds support for the Spanish translation of the "Contact Us" page on the Famdesc platform. This update includes translated content for all text elements, ensuring a consistent user experience for Spanish-speaking users.

#### Change Details

- **Title and Subtitles**: The main title and subtitles of the contact page have been translated into Spanish.
- **Form Labels**: Labels for form fields (e.g., first name, last name, details) have been updated to Spanish.
- **ContactIconBlocks**: The headings and content for various contact options, including the Knowledge Base, FAQ, office visit, and email contact, have been translated.

#### Motivation and Context

This update enhances the accessibility and usability of the Famdesc platform for Spanish-speaking users. It aligns with our commitment to providing a localized experience that caters to a diverse audience.

#### Instructions for Testing

1. Navigate to the "Contact Us" page with the site language set to Spanish.
2. Verify that all text elements are displayed in Spanish.
3. Ensure that form fields and ContactIconBlocks are accurately translated and maintain consistency in design and layout.
4. Test the form submission to ensure that no functionality is affected by the translation.

#### Additional Notes

- Review translations to ensure accuracy and appropriateness within the context of the platform.
- Check for any visual discrepancies or issues that may have arisen due to changes in text length in the translated content.

#### Related Issues

- N/A

#### Screenshots

![Contact Us page with Spanish translations](https://raw.githubusercontent.com/nardis9501/Famdesc-images/main/blog/contact-screenshot.avif)

### Conclusion

The effective use of Pull Requests is a key practice in collaborative development, helping to maintain code quality, facilitate communication among developers, and ensure that the project progresses in a consistent and well-documented manner.
