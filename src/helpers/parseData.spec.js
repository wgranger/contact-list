import {
  convertCurrency,
  findContactDeals,
  findDealValues,
  findLocation,
  findTags,
  parseData
} from './parseData'

describe('Function > convertCurrency', function () {
  it('should not change usd', function () {
    const result = convertCurrency('usd', 1000)
    expect(result).toBe(1000)
  })

  it('should convert aud', function () {
    const result = convertCurrency('aud', 1000)
    expect(result).toBe(710)
  })

  it('should convert eur', function () {
    const result = convertCurrency('eur', 1000)
    expect(result).toBe(1150)
  })
})

describe('Function > findContactDeals', function () {
  it('should find the deals for a contact', function () {
    const deals = [{ contact: '1' }, { contact: '2' }]
    const result = findContactDeals('1', deals)
    expect(result.length).toBe(1)
  })
})

describe('Function > findDealValues', function () {
  describe('with associated deals', function () {
    it('should return the correct values', function () {
      const deals = [
        { contact: '1', currency: 'usd', value: 1000 },
        { contact: '1', currency: 'usd', value: 2000 },
        { contact: '2', currency: 'usd', value: 1000 }
      ]
      const result = findDealValues('1', deals)
      expect(result).toBe(3000)
    })
  })

  describe('without associated deals', function () {
    it('should return zero', function () {
      const deals = [{ contact: '2', currency: 'usd', value: 1000 }]
      const result = findDealValues('1', deals)
      expect(result).toBe(0)
    })
  })
})

describe('Function > findLocation', function () {
  describe('with a valid location', function () {
    it('should return the location', function () {
      const contact = { city: 'Chicago', state: 'IL', country: 'USA' }
      const result = findLocation(contact)
      expect(result).toBe('Chicago, IL, USA')
    })
  })

  describe('without a valid location', function () {
    it('should return an empty string', function () {
      const contact = { city: 'Chicago', state: 'IL' }
      const result = findLocation(contact)
      expect(result).toBe('')
    })
  })
})

describe('Function > findTags', function () {
  describe('with associated tags', function () {
    it('should return the tags', function () {
      const contactTags = [{ contact: '1', tag: '1' }]
      const tags = [{ id: '1', tag: 'A tag' }]
      const result = findTags('1', contactTags, tags)
      expect(result).toEqual(['A tag'])
    })
  })

  describe('without associated tags', function () {
    it('should return an empty array', function () {
      const contactTags = [{ contact: '1', tag: '1' }]
      const tags = [{ id: '2', tag: 'A tag' }]
      const result = findTags('1', contactTags, tags)
      expect(result).toEqual([])
    })
  })
})

describe('Function > parseData', function () {
  describe('with valid data', function () {
    it('should return a contact', function () {
      const data = {
        contacts: [{ id: '1', firstName: 'John', lastName: 'Smith', city: 'Chicago', state: 'IL', country: 'USA' }],
        contactTags: [{ contact: '1', tag: '1' }],
        deals: [{ contact: '1', currency: 'usd', value: 1000 }],
        tags: [{ id: '1', tag: 'A tag' }]
      }
      const result = parseData(data)
      expect(result).toEqual([{
        contact: 'John Smith',
        value: 1000,
        location: 'Chicago, IL, USA',
        deals: 1,
        tags: ['A tag']
      }])
    })
  })

  describe('without data', function () {
    it('should return an empty string', function () {
      const result = parseData()
      expect(result).toEqual([])
    })
  })

  describe('with incomplete data', function () {
    it('should return an empty string', function () {
      const result = parseData({})
      expect(result).toEqual([])
    })
  })
})
