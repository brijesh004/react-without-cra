import { cleanup, render, screen } from "@testing-library/react"
import Counter from "./Counter"


describe("tests", () => {

    beforeEach(() => {
        render(<Counter />)
    })

    afterAll(cleanup)

    test("Counter tests", () => {
        const button = screen.getByRole("button", { name: "Counter" })
        expect(button).toBeInTheDocument();
    })
})