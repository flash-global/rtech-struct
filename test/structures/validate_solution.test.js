const s = require('superstruct')
const rtech_struct = require('../../index')
const ValidateSolution = rtech_struct.ValidateSolution()

const payload = {
  transport: {
    packages: [
      {
        owner: '82SKOREWAY2',
        height: 98,
        length: 100,
        width: 60,
        weight: 53,
        stackable: 'no',
        quantity: 2,
        package_type: 'parcel',
        references: ['POS213899', '39158162 - 240pcs'],
        tracking_id: '5b48e3f3-47b5-4c1a-9d32-de3bdf4c142d'
      },
      {
        owner: '82SKOREWAY2',
        height: 15,
        length: 30,
        width: 20,
        weight: 14,
        stackable: 'no',
        quantity: 1,
        package_type: 'parcel',
        references: ['POS213900', '39217187 - 300pcs'],
        tracking_id: '3d07ac5c-0962-453b-ac57-cfbad3b704b3'
      },
      {
        owner: '82SKOREWAY2',
        height: 100,
        length: 120,
        width: 100,
        weight: 350,
        stackable: 'no',
        quantity: 2,
        package_type: 'parcel',
        references: ['POS213901', '13533588 - 30pcs / 13533667 - 300pcs'],
        tracking_id: '6ba65779-5d10-4f2e-96b2-3756659b3b0f'
      },
      {
        owner: '82SKOREWAY2',
        height: 200,
        length: 220,
        width: 100,
        weight: 350,
        stackable: 'no',
        quantity: 3,
        package_type: 'parcel',
        references: ['POS213901', '13533588 - 30pcs / 13533667 - 300pcs'],
        tracking_id: '6ba65779-5d10-4f2e-96b2-3756659bcccc'
      }
    ],
    points: [
      {
        key: 'A',
        arrival_from: '2021-05-10T07:00:00Z',
        arrival_until: '2021-05-10T07:00:00Z',
        address: {
          street: 'UL. NOWATOROW 20',
          city: 'GDANSK',
          zip_code: '80-298',
          country: 'PL',
          timezone_string: 'Europe/Warsaw',
          position: {
            lat: 54.3723,
            lon: 18.4749
          }
        },
        contact: {
          company_name: 'APTIV SERVICES POLAND SA Updated'
        },
        package_to_load: [
          '5b48e3f3-47b5-4c1a-9d32-de3bdf4c142d',
          '3d07ac5c-0962-453b-ac57-cfbad3b704b3',
          '6ba65779-5d10-4f2e-96b2-3756659b3b0f',
          '6ba65779-5d10-4f2e-96b2-3756659bcccc'
        ],
        package_to_unload: []
      },
      {
        key: 'B',
        arrival_from: '2021-05-17T06:00:00Z',
        arrival_until: '2021-05-17T06:00:00Z',
        address: {
          street: 'ulica Adama Opla, 1',
          city: 'Gliwice',
          zip_code: '44-121',
          country: 'PL',
          timezone_string: 'Europe/Warsaw',
          position: {
            lat: 50.319,
            lon: 18.6217
          }
        },
        contact: {
          company_name: 'GM Manufacturing Poland Updated',
          name: 'step B name updated',
          email: 'stepB@emailupdated.com',
          phone: '+352444444444111'
        },
        package_to_load: [],
        package_to_unload: [
          '5b48e3f3-47b5-4c1a-9d32-de3bdf4c142d',
          '3d07ac5c-0962-453b-ac57-cfbad3b704b3',
          '6ba65779-5d10-4f2e-96b2-3756659b3b0f',
          '6ba65779-5d10-4f2e-96b2-3756659bcccc'
        ]
      }
    ],
    incoterm: 'EXW',
    distances: [382.871, 200.01]
  },
  selected_solution: {
    reported_at: '2021-06-02T14:18:08.305Z',
    key: 'EP2106E73G',
    logo: 'https://dev.upelgo.com/images/carriers/logo-flash.png',
    from: 'Flash BREAK',
    source: ['FROPSCENTER'],
    type: 'bid',
    targetRating: 0,
    auction: 'f4da2d13-0483-4070-b7f8-68cd87a737b6',
    valid_until: '2021-06-02T15:18:07.382Z',
    vehicule: 'BREAK',
    loaded: 'No',
    creator: 'RATER_ENGINE',
    tms: 'FLASH',
    validatorEmails: ['v.simonin@redspher.com'],
    price: 690,
    puDate: '2021-06-10T16:00:00Z',
    deDate: '2021-06-10T23:59:00Z',
    lang: 'F',
    currency: 'EUR',
    driver: 'UGO',
    score: [0, 0, 0],
    status: 'running',
    tracker: 'ftk',
    target: ['82SKOREWAY2'],
    id: '7c29cbb9-5c81-42f1-942c-d1aa6d21d2ab',
    _version_: 1701465018568016000
  }
}

describe('ValidateSolution structure tests suite', () => {
  test('Success: ValidateSolution is valid', () => {
    const [error, data] = s.validate(payload, ValidateSolution, { coerce: true })
    expect(error).toBeUndefined()
  })
  test('Success: ValidateSolution is valid with key', () => {
    let testPayload = { ...payload }
    testPayload.key = 'shipmentKey'
    const [error] = s.validate(testPayload, ValidateSolution, { coerce: true })
    expect(error).toBeUndefined()
  })
  test('Success: ValidateSolution is valid with comment', () => {
    let testPayload = { ...payload }
    testPayload.comment = 'some comment'
    const [error] = s.validate(testPayload, ValidateSolution, { coerce: true })
    expect(error).toBeUndefined()
  })
  test('Success: ValidateSolution is valid with references', () => {
    let testPayload = { ...payload }
    testPayload.references = [
      {
        label: 'My Field',
        value: 'Field value'
      }
    ]
    const [error] = s.validate(testPayload, ValidateSolution, { coerce: true })
    expect(error).toBeUndefined()
  })

  test('Success: ValidateSolution is valid with invoice', () => {
    let testPayload = { ...payload }
    testPayload.invoice = {
      bill_to: '82SKOREWAY2',
      currency: 'EUR'
    }
    const [error] = s.validate(testPayload, ValidateSolution, { coerce: true })
    expect(error).toBeUndefined()
  })

  test('Success: ValidateSolution is valid with custom_fields', () => {
    let testPayload = { ...payload }
    testPayload.custom_fields = [
      {
        label: 'My Field',
        value: 'Field value'
      }
    ]
    const [error] = s.validate(testPayload, ValidateSolution, { coerce: true })
    expect(error).toBeUndefined()
  })

  test('Success: ValidateSolution is invalid without selected_solution', () => {
    let testPayload = { ...payload }
    delete testPayload.selected_solution
    expect(s.is(testPayload, ValidateSolution)).toBeFalsy()
    const [error] = s.validate(testPayload, ValidateSolution, { coerce: true })
    expect(error).toBeDefined()
  })

  test('Failure: ValidateSolution is invalid without transport', () => {
    let testPayload = { ...payload }
    delete testPayload.transport
    expect(s.is(testPayload, ValidateSolution)).toBeFalsy()
  })

  test('Failure: ValidateSolution is invalid with wrong email', () => {
    let testPayload = { ...payload }
    testPayload.transport.points[0].contact = {
      email: 'test@test__test.com'
    }
    expect(s.is(testPayload, ValidateSolution)).toBeFalsy()
  })

  test('Failure: ValidateSolution is invalid transport vehicles', () => {
    let testPayload = { ...payload }
    testPayload.transport.vehicule = [
      'test1',
      'test2',
      'break',
      'frg1',
      'frg2',
      'frg3',
      'frg4',
      'frg4h',
      'frgr',
      'pkw',
      'pl5',
      'pl9',
      'semi',
      'semim',
      'airfreight',
      'seafreight',
      'railfreight'
    ]
    expect(s.is(testPayload, ValidateSolution)).toBeFalsy()
  })
})
