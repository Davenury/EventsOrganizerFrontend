import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Button } from '../atoms/Button';

let container = null

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
});

const dummyFunction = () => {}

it("renders with text", () => {
    act(() => {
        render(<Button onClick={dummyFunction}/>, container);
    })
    expect(container.textContent).toBe("Oops, something should be here!")

    act(() => {
        render(<Button text="Search!" onClick={dummyFunction}/>, container)
    })
    expect(container.textContent).toBe("Search!")
})