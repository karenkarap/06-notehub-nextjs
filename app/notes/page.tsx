import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';
import { NotesClient } from './Notes.client';

function Notes() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(1, ''),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

export default Notes;
