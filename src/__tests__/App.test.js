import {render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';

test("displays a top-level heading with text `Hi, I'm Boniface Mwangi`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLveleHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    // Assert
    expect(topLveleHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
    render(<App/>);
    const image = screen.getByAltText(/boniface mwangi/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
});

test("displays a second-level heading with text 'About Me'", () => {
    render(<App/>);
    const aboutHeading = screen.getByRole("heading", {
        name: /about me/i,
        level: 2,
    });
    expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
    render(<App/>);
    const bioParagraph = screen.getByText(/I'm a software developer passionate about creating web applications./i);
    expect(bioParagraph).toBeInTheDocument();
    expect(bioParagraph.tagName).toBe('P');
});

test("displays Github link", () => {
    render(<App/>);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
});

test("displays LinkedIn link", () => {
    render(<App />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
})