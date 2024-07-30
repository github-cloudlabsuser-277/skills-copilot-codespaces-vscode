const handleMarkdownChange = (event) => {
    const input = event.target.value;
    const reversedSentence = input.split(' ').reverse().join(' ');
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    setMarkdown(capitalizedSentence);
};
