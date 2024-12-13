export const truncateText = (inputText, length) => {
    if(inputText !== undefined) {
        if (inputText.length > length) {
          return inputText.substring(0, length) + '...';
        }
        return inputText;
    }
}