import React from 'react'
import {Accordion} from '../accordion'
import {
  css,
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from '../shared'

function SinglePreventCloseAccordion({items, ...props}) {
  return (
    <Accordion stateReducer={combineReducers(single, preventClose)} {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title}>
              <AccordionButton
                {...css({textAlign: 'left', minWidth: 80})}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}{' '}
                <span>{openIndexes.includes(index) ? '👇' : '👉'}</span>
              </AccordionButton>
              <AccordionContents
                {...css({overflowY: 'hidden', textAlign: 'justify'})}
                pose={openIndexes.includes(index) ? 'open' : 'closed'}
              >
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </div>
      )}
    </Accordion>
  )
}

export {SinglePreventCloseAccordion}
