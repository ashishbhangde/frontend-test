/* eslint no-magic-numbers: 0 */
import _ from 'lodash'

export const getURLParameters = url => {
  const result = {}
  const searchIndex = url.indexOf('?')
  if (searchIndex === -1) {
    return result
  }

  const sPageURL = url.substring(searchIndex + 1)
  const urlWithImpers = sPageURL.split('&')
  urlWithImpers.forEach(pair => {
    const parameterName = pair.split('=')
    if (parameterName[1] === 'undefined' || parameterName[1] === undefined) {
      result[parameterName[0]] = undefined
    } else {
      result[parameterName[0]] = decodeURIComponent(parameterName[1])
    }
  })
  if (result.amenities) {
    result.amenities = result.amenities.split(',')
  }
  if (result.bedrooms) {
    result.bedrooms = result.bedrooms.split(',')
  }
  if (result.bathrooms) {
    result.bathrooms = result.bathrooms.split(',')
  }
  return result
}

export const getSortableStyle = () => {
  const uploadedStyle = {
    apartmentWrapper: {
      position: 'relative'
    },
    apartmentThumbnail: {
      position: 'relative',
      paddingTop: '75%'
    },
    apartmentThumbnailThumb: {
      padding: 0,
      backgroundColor: '#fff',
      border: '0px solid #dee2e6',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    },
    apartmentInfo: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      height: 40,
      minHeight: 40,
      zIndex: 1
    },
    thumbnailTitle: {
      fontWeight: 600,
      fontSize: 14,
      color: '#000000',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'none'
    },
    rotate: {
      color: '#fff',
      height: 40,
      display: 'block',
      minHeight: 40,
      minWidth: 40,
      borderRadius: '0.25rem'
    },
    remove: {
      color: '#e63757',
      display: 'block',
      minHeight: 40,
      height: 40,
      minWidth: 40,
      borderRadius: '0.25rem'
    },
    img: {
      position: 'relative',
      zIndex: '-1'
    }
  }
  return uploadedStyle
}
export const getQueryString = data => {
  const newData = {}
  _.forIn(data, (value, key) => {
    if (data[key]) {
      newData[key] = data[key]
    }
  })

  const queryString = Object.keys(newData)
    .map((key, i) => {
      return `${key}=${newData[key]}`
    })
    .join('&')
  return queryString
}

export const formatAddress = data => {
  let address = `${_.get(data, 'address', '')}`
  if (address.indexOf(', USA') !== -1) {
    address = address.replace(/, USA/g, '')
  }
  if (address.indexOf('#') !== -1) {
    address = address.replace(/#/g, '')
  }
  return address
}

export const formatAddressOnlyCity = data => {
  let address = `${_.get(data, 'address', '')}`
  if (address.indexOf(', USA') !== -1) {
    address = address.replace(/, USA/g, '')
  }
  if (address.indexOf('#') !== -1) {
    address = address.replace(/#/g, '')
  }
  address = address.split(/,(.+)/)[1]
  return address
}

export const formatName = data => {
  if (data && data.house_number && data.street_name) {
    return `${_.get(data, 'house_number', '')} ${_.get(
      data,
      'street_name',
      ''
    )}`
  } else if (data && data.building_name) {
    return `${_.get(data, 'building_name', '')}`
  }
}

export const isImpersonate = () => {
  const impersonate = JSON.parse(localStorage.getItem('impersonate'))
  return impersonate
}

export const selectOptions = key => {
  if (key === 'amenities') {
    return [
      { key: 'Pet-friendly', exists: false },
      { key: 'Playroom', exists: false },
      { key: 'Pool', exists: false },
      { key: 'Elevator', exists: false },
      { key: 'Valet', exists: false },
      { key: 'Doorman', exists: false },
      { key: 'Gym', exists: false },
      { key: 'Rooftop', exists: false },
      { key: 'Laundry on Site', exists: false }
    ]
  }
  if (key === 'bathrooms') {
    return [
      { key: '1 bath', exists: false },
      { key: '2 bath', exists: false },
      { key: '3 bath', exists: false },
      { key: '4+ bath', exists: false }
    ]
  }
  if (key === 'bedrooms') {
    return [
      { key: 'Studio', exists: false },
      { key: '1 bedroom', exists: false },
      { key: '2 bedroom', exists: false },
      { key: '3 bedroom', exists: false },
      { key: '4+ bedroom', exists: false }
    ]
  }
  if (key === 'boroughsList') {
    return ['Manhattan', 'Bronx', 'Staten Island', 'Brooklyn', 'Queens']
  }
  if (key === 'overallExpirenceArr') {
    return [
      { key: 1, value: 'Hated it' },
      { key: 2, value: '' },
      { key: 3, value: 'It was ok' },
      { key: 4, value: '' },
      { key: 5, value: 'Loved it' }
    ]
  }
  if (key === 'safetyArr') {
    return [
      { key: 1, value: 'Not safe at all' },
      { key: 2, value: 'Not safe at night' },
      { key: 3, value: 'Somewhat safe' },
      { key: 4, value: 'Safe to live in' },
      { key: 5, value: 'No safety concerns' }
    ]
  }
  if (key === 'waterPressureArr') {
    return [
      { key: 1, value: 'Very poor' },
      { key: 2, value: 'Poor' },
      { key: 3, value: 'Fair' },
      { key: 4, value: 'Good' },
      { key: 5, value: 'Very good' }
    ]
  }
  if (key === 'noiseLevelArr') {
    return [
      { key: 1, value: 'Very noisy, can’t sleep' },
      { key: 2, value: 'Noisy and annoying' },
      { key: 3, value: 'Somewhat noisy, but tolerable' },
      { key: 4, value: 'Not noisy, peaceful' },
      { key: 5, value: 'Very peaceful and quiet' }
    ]
  }
  if (key === 'neighborhoodDescArr') {
    return [
      { value: false, key: 'LGBTQ+ friendly', dbkey: 'lgbtq_friendly' },
      { value: false, key: 'Trendy and hip', dbkey: 'trendy_hip' },
      { value: false, key: 'Close to subway', dbkey: 'close_to_subway' },
      {
        value: false,
        key: 'Great for raising a family',
        dbkey: 'family_friendly'
      },
      {
        value: false,
        key: 'Culturally diverse neighbors',
        dbkey: 'culturally_diverse'
      }
    ]
  }
  if (key === 'apartmentPositionArr') {
    return [
      { key: 'Northside', value: 'Northside' },
      { key: 'Southside', value: 'Southside' },
      { key: 'Eastside', value: 'Eastside' },
      { key: 'Westside', value: 'Westside' },
      { key: 'Front', value: 'Front' },
      { key: 'Back', value: 'Back' },
      { key: 'Not sure', value: 'Not sure' }
    ]
  }
  if (key === 'apartmentTypeArr') {
    return [
      { key: 'Studio', value: 'Studio' },
      { key: '1 bedroom', value: '1 bedroom' },
      { key: '2 bedroom', value: '2 bedroom' },
      { key: '3 bedroom', value: '3 bedroom' },
      { key: '4+ bedroom', value: '4+ bedroom' }
    ]
  }
  if (key === 'whenLiveArr') {
    return [
      { key: 'Currently live here', value: 'Currently live here' },
      { key: 'Less than 1 year ago', value: 'Less than 1 year ago' },
      { key: '1-2 years ago', value: '1-2 years ago' },
      { key: '3-4 years ago', value: '3-4 years ago' },
      { key: '5+ years ago', value: '5+ years ago' }
    ]
  }
  if (key === 'howLongArr') {
    return [
      { key: 'Currently live here', value: 'Currently live here' },
      { key: 'Less than 1 year', value: 'Less than 1 year' },
      { key: '1-2 years', value: '1-2 years' },
      { key: '3-4 years', value: '3-4 years' },
      { key: '5+ years', value: '5+ years' }
    ]
  }
}
