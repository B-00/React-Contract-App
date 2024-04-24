const contractData = [
    {
      fullName: 'Jane Smith',
      experience: 18,
      contractType: 'D',
      uploadDate: '2023-05-04',
      timeFrame: 10,
      policyNumber: 'POL-970267021',
      codeNumber: 4381
    },
    {
      fullName: 'Alice Johnson',
      experience: 25,
      contractType: 'B',
      uploadDate: '2023-05-16',
      timeFrame: 7,
      policyNumber: 'POL-300133951',
      codeNumber: 693
    },
    {
      fullName: 'Bob Brown',
      experience: 21,
      contractType: 'D',
      uploadDate: '2023-05-20',
      timeFrame: 7,
      policyNumber: 'POL-952269641',
      codeNumber: 8275
    },
    {
      fullName: 'John Doe',
      experience: 23,
      contractType: 'C',
      uploadDate: '2023-05-22',
      timeFrame: 3,
      policyNumber: 'POL-369081219',
      codeNumber: 9194
    },
    {
      fullName: 'Jane Smith',
      experience: 9,
      contractType: 'C',
      uploadDate: '2023-09-15',
      timeFrame: 9,
      policyNumber: 'POL-516041087',
      codeNumber: 587
    },
    {
      fullName: 'Alice Johnson',
      experience: 1,
      contractType: 'A',
      uploadDate: '2023-08-01',
      timeFrame: 8,
      policyNumber: 'POL-700663581',
      codeNumber: 4250
    },
    {
      fullName: 'Jane Smith',
      experience: 13,
      contractType: 'B',
      uploadDate: '2024-03-12',
      timeFrame: 1,
      policyNumber: 'POL-747072787',
      codeNumber: 6657
    },
    {
      fullName: 'John Doe',
      experience: 18,
      contractType: 'C',
      uploadDate: '2023-06-08',
      timeFrame: 12,
      policyNumber: 'POL-163513716',
      codeNumber: 2591
    },
    {
      fullName: 'Jane Smith',
      experience: 28,
      contractType: 'C',
      uploadDate: '2023-10-20',
      timeFrame: 7,
      policyNumber: 'POL-896173663',
      codeNumber: 2645
    },
    {
      fullName: 'Bob Brown',
      experience: 28,
      contractType: 'C',
      uploadDate: '2024-03-22',
      timeFrame: 8,
      policyNumber: 'POL-712616239',
      codeNumber: 2565
    },
    {
      fullName: 'John Doe',
      experience: 20,
      contractType: 'B',
      uploadDate: '2023-07-29',
      timeFrame: 1,
      policyNumber: 'POL-172932454',
      codeNumber: 5023
    },
    {
      fullName: 'Bob Brown',
      experience: 25,
      contractType: 'A',
      uploadDate: '2023-04-04',
      timeFrame: 9,
      policyNumber: 'POL-059670140',
      codeNumber: 6271
    },
    {
      fullName: 'Alice Johnson',
      experience: 20,
      contractType: 'C',
      uploadDate: '2023-11-07',
      timeFrame: 6,
      policyNumber: 'POL-222612846',
      codeNumber: 4298
    },
    {
      fullName: 'John Doe',
      experience: 12,
      contractType: 'B',
      uploadDate: '2023-08-28',
      timeFrame: 3,
      policyNumber: 'POL-575739362',
      codeNumber: 8972
    },
    {
      fullName: 'Jane Smith',
      experience: 9,
      contractType: 'A',
      uploadDate: '2023-07-14',
      timeFrame: 4,
      policyNumber: 'POL-179786466',
      codeNumber: 8088
    },
    {
      fullName: 'Bob Brown',
      experience: 10,
      contractType: 'B',
      uploadDate: '2023-08-06',
      timeFrame: 7,
      policyNumber: 'POL-897338414',
      codeNumber: 5345
    },
    {
      fullName: 'Alice Johnson',
      experience: 5,
      contractType: 'B',
      uploadDate: '2023-11-06',
      timeFrame: 11,
      policyNumber: 'POL-796981575',
      codeNumber: 4840
    },
    {
      fullName: 'John Doe',
      experience: 10,
      contractType: 'A',
      uploadDate: '2023-12-14',
      timeFrame: 4,
      policyNumber: 'POL-234551093',
      codeNumber: 3725
    },
    {
      fullName: 'Jane Smith',
      experience: 16,
      contractType: 'D',
      uploadDate: '2023-05-01',
      timeFrame: 6,
      policyNumber: 'POL-024177633',
      codeNumber: 4840
    },
    {
      fullName: 'Bob Brown',
      experience: 1,
      contractType: 'A',
      uploadDate: '2023-07-12',
      timeFrame: 1,
      policyNumber: 'POL-536080666',
      codeNumber: 147
    },
    {
      fullName: 'Jane Smith',
      experience: 3,
      contractType: 'B',
      uploadDate: '2023-04-10',
      timeFrame: 2,
      policyNumber: 'POL-418912812',
      codeNumber: 2484
    },
    {
      fullName: 'John Doe',
      experience: 26,
      contractType: 'B',
      uploadDate: '2024-01-27',
      timeFrame: 5,
      policyNumber: 'POL-538779499',
      codeNumber: 2314
    },
    {
      fullName: 'Alice Johnson',
      experience: 14,
      contractType: 'B',
      uploadDate: '2023-09-19',
      timeFrame: 8,
      policyNumber: 'POL-969922682',
      codeNumber: 2253
    },
    {
      fullName: 'Bob Brown',
      experience: 27,
      contractType: 'A',
      uploadDate: '2023-08-31',
      timeFrame: 12,
      policyNumber: 'POL-268384618',
      codeNumber: 1698
    },
    {
      fullName: 'Jane Smith',
      experience: 1,
      contractType: 'A',
      uploadDate: '2024-01-14',
      timeFrame: 5,
      policyNumber: 'POL-434454560',
      codeNumber: 1952
    },
    {
      fullName: 'Alice Johnson',
      experience: 21,
      contractType: 'A',
      uploadDate: '2023-07-09',
      timeFrame: 5,
      policyNumber: 'POL-690719408',
      codeNumber: 7794
    },
    {
      fullName: 'Alice Johnson',
      experience: 15,
      contractType: 'D',
      uploadDate: '2023-12-06',
      timeFrame: 6,
      policyNumber: 'POL-024246214',
      codeNumber: 4772
    },
    {
      fullName: 'Bob Brown',
      experience: 23,
      contractType: 'A',
      uploadDate: '2024-03-10',
      timeFrame: 1,
      policyNumber: 'POL-399837699',
      codeNumber: 1817
    },
    {
      fullName: 'Alice Johnson',
      experience: 21,
      contractType: 'C',
      uploadDate: '2023-09-21',
      timeFrame: 1,
      policyNumber: 'POL-164141367',
      codeNumber: 326
    },
    {
      fullName: 'Alice Johnson',
      experience: 19,
      contractType: 'C',
      uploadDate: '2023-04-22',
      timeFrame: 5,
      policyNumber: 'POL-114216794',
      codeNumber: 9961
    },
    {
      fullName: 'Alice Johnson',
      experience: 12,
      contractType: 'D',
      uploadDate: '2024-03-16',
      timeFrame: 8,
      policyNumber: 'POL-105775346',
      codeNumber: 7217
    },
    {
      fullName: 'Bob Brown',
      experience: 11,
      contractType: 'C',
      uploadDate: '2023-09-05',
      timeFrame: 3,
      policyNumber: 'POL-260217083',
      codeNumber: 1135
    },
    {
      fullName: 'Jane Smith',
      experience: 28,
      contractType: 'A',
      uploadDate: '2024-03-24',
      timeFrame: 11,
      policyNumber: 'POL-384056143',
      codeNumber: 4266
    },
    {
      fullName: 'Bob Brown',
      experience: 1,
      contractType: 'C',
      uploadDate: '2023-04-18',
      timeFrame: 6,
      policyNumber: 'POL-132082380',
      codeNumber: 8711
    },
    {
      fullName: 'Jane Smith',
      experience: 17,
      contractType: 'C',
      uploadDate: '2023-10-28',
      timeFrame: 9,
      policyNumber: 'POL-373416828',
      codeNumber: 6296
    },
    {
      fullName: 'Bob Brown',
      experience: 29,
      contractType: 'C',
      uploadDate: '2024-03-15',
      timeFrame: 5,
      policyNumber: 'POL-901812371',
      codeNumber: 2818
    },
    {
      fullName: 'Bob Brown',
      experience: 15,
      contractType: 'B',
      uploadDate: '2023-05-25',
      timeFrame: 9,
      policyNumber: 'POL-721296497',
      codeNumber: 548
    },
    {
      fullName: 'Bob Brown',
      experience: 28,
      contractType: 'B',
      uploadDate: '2023-10-01',
      timeFrame: 12,
      policyNumber: 'POL-024784446',
      codeNumber: 466
    },
    {
      fullName: 'Bob Brown',
      experience: 5,
      contractType: 'C',
      uploadDate: '2023-05-11',
      timeFrame: 4,
      policyNumber: 'POL-231216937',
      codeNumber: 3705
    },
    {
      fullName: 'Alice Johnson',
      experience: 15,
      contractType: 'C',
      uploadDate: '2023-06-12',
      timeFrame: 5,
      policyNumber: 'POL-350519388',
      codeNumber: 8133
    },
    {
      fullName: 'Alice Johnson',
      experience: 8,
      contractType: 'C',
      uploadDate: '2024-01-30',
      timeFrame: 1,
      policyNumber: 'POL-283398989',
      codeNumber: 27
    },
    {
      fullName: 'Jane Smith',
      experience: 27,
      contractType: 'D',
      uploadDate: '2023-11-06',
      timeFrame: 6,
      policyNumber: 'POL-373367293',
      codeNumber: 8174
    },
    {
      fullName: 'Alice Johnson',
      experience: 2,
      contractType: 'A',
      uploadDate: '2023-12-13',
      timeFrame: 2,
      policyNumber: 'POL-987537855',
      codeNumber: 7805
    },
    {
      fullName: 'Bob Brown',
      experience: 27,
      contractType: 'B',
      uploadDate: '2024-03-02',
      timeFrame: 5,
      policyNumber: 'POL-061502066',
      codeNumber: 5339
    },
    {
      fullName: 'Jane Smith',
      experience: 2,
      contractType: 'A',
      uploadDate: '2024-01-17',
      timeFrame: 8,
      policyNumber: 'POL-021805607',
      codeNumber: 5092
    },
    {
      fullName: 'Bob Brown',
      experience: 29,
      contractType: 'B',
      uploadDate: '2023-10-17',
      timeFrame: 8,
      policyNumber: 'POL-068938667',
      codeNumber: 4991
    },
    {
      fullName: 'Bob Brown',
      experience: 3,
      contractType: 'A',
      uploadDate: '2024-01-03',
      timeFrame: 9,
      policyNumber: 'POL-329256508',
      codeNumber: 3583
    },
    {
      fullName: 'Alice Johnson',
      experience: 17,
      contractType: 'A',
      uploadDate: '2024-01-06',
      timeFrame: 5,
      policyNumber: 'POL-411683035',
      codeNumber: 6021
    },
    {
      fullName: 'Jane Smith',
      experience: 19,
      contractType: 'B',
      uploadDate: '2024-03-16',
      timeFrame: 8,
      policyNumber: 'POL-121162543',
      codeNumber: 4620
    },
    {
      fullName: 'Jane Smith',
      experience: 3,
      contractType: 'B',
      uploadDate: '2023-12-25',
      timeFrame: 3,
      policyNumber: 'POL-253509092',
      codeNumber: 4328
    }
  ]
export default contractData
