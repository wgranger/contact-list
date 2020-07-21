// rates accurate as of 7/21/2020
function convertCurrency(currency, value) {
  switch (currency) {
    case 'aud':
      value = value * 0.71
      break;
    case 'eur':
      value = value * 1.15
      break;
    default:
      value = value * 1
  }
  return value
}

function findDealValues(contactId, deals) {
  const contactDeals = deals.filter(deal => deal.contact === contactId)
  const values = contactDeals.map(deal => convertCurrency(deal.currency, deal.value))

  if (!values.length) return 0
  return values.reduce((a,b) => a + b).toFixed(2)
}

function findLocation(contact) {
  const { city, state, country } = contact
  const fullLocation = city && state && country
  return fullLocation ? `${city}, ${state}, ${country}` : ''
}

function findTags(contactId, contactTags, tags) {
  const associatedTags = contactTags.filter(tag => tag.contact === contactId)
  const tagIds = associatedTags.map(fullTag => fullTag.tag)
  const tagsText = []

  for (let i = 0; i < tags.length; i++) {
    const curTag = tags[i]
    if (tagIds.includes(curTag.id)) {
      tagsText.push(curTag.tag)
    }
  }

  return tagsText
}

export default function parseData(data) {
  let parsedData = []
  if (!data) return parsedData

  let { contacts, contactTags, deals, tags } = data

  if (contacts) {
    parsedData = contacts.map(contact => {
      return {
        contact: `${contact.firstName} ${contact.lastName}`,
        value: findDealValues(contact.id, deals),
        location: findLocation(contact),
        deals: deals.length,
        tags: findTags(contact.id, contactTags, tags)
      }
    })
  }
  return parsedData
}
