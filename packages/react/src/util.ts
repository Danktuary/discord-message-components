import { Children, ReactElement, ReactNode } from 'react'

export type ChildElements = ReactNode | ReactNode[]

export const elementsWithoutSlot = (elements: ChildElements, name: string): ChildElements => {
	return Children.map((elements as ReactElement[]), (element: ReactElement): ReactNode => {
		if (element?.props?.slot === name) return
		return element
	})
}

export const findSlot = (elements: ReactNode, name: string): ReactNode => {
	return (Children.toArray(elements) as ReactElement[]).find((element: ReactElement): ReactNode => {
		return element?.props?.slot === name
	})
}
