import type { ITopic } from './../models/interfaces';
import { Nogimo } from 'nogimo';
export const topicsTrack = new Nogimo<ITopic[]>(null as any, 'topic-tracker');
