import documents from '../fixtures/documents';

export const fetchSentItems = (email) => (
  documents.filter(doc => (
    doc.message.from.email === email
  ))
);

export const fetchInbox = (email) => (
  documents.filter(doc => {
    const to = doc.message.to.map(x => (
      x.email
    ));

    return to.indexOf(email) > -1;
  })
);

export const fetchUnread = (email) => {
  const inboxDocs = fetchInbox(email);
  
  return inboxDocs.filter(doc => 
                          doc.message.unread
                         )
                         .length;
};
