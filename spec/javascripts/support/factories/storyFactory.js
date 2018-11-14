const storyFactory = (storyAttrs) => ({
  title: 'title',
  description: 'description',
  estimate: 1,
  storyType: 'feature',
  state: 'unstarted',
  requestedById: 1,
  ownedById: 1,
  projectId: 1,
  createdAt: '2018/10/26 15:08:51 -0300',
  updatedAt: '2018/11/08 15:24:06 -0200',
  position: '1.0',
  labels: 'features',
  requestedByName: 'Foo Bar',
  ownedByName: 'Foo Bar',
  ownedByInitials: 'FB',
  releaseDate: null,
  deliveredAt: null,
  errors: {},
  notes: [
    {
      id: 1,
      note: 'This is note 1',
      userName: 'Foo Bar',
      createdAt: '2018/10/26 15:08:51 -0200'
    },
    {
      id: 2,
      note: 'This is note 2',
      userName: 'Foo Bar',
      createdAt: '2018/10/26 15:08:51 -0200'
    }
  ],
  documents: [],
  tasks: [],
  ...storyAttrs
});

export default storyFactory;
