export type Event = {
  id: string;
  name: string;
  rank: number | null;
};

export type GetAllEventsResponse = {
  events: Event[];
};
