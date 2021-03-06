// Copyright 2017 The gachain-front Authors
// This file is part of the gachain-front library.
// 
// The gachain-front library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// The gachain-front library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public License
// along with the gachain-front library. If not, see <http://www.gnu.org/licenses/>.

import actionCreatorFactory from 'typescript-fsa';
import { IStoredAccount } from 'gachain/storage';
import { INotificationsMessage } from 'gachain/socket';

const actionCreator = actionCreatorFactory('socket');
export const connect = actionCreator.async<{ userID: string, socketToken: string, timestamp: string }, ICentrifuge, string>('CONNECT');
export const disconnect = actionCreator.async('DISCONNECT');
export const subscribe = actionCreator.async<{ account: IStoredAccount }, any, string>('SUBSCRIBE');
export const unsubscribe = actionCreator.async<{ account: IStoredAccount }, void, void>('UNSUBSCRIBE');
export const setNotificationsCount = actionCreator<INotificationsMessage>('SET_NOTIFICATIONS_COUNT');
export const getNotificationsCount = actionCreator<{ ids: { id: string, ecosystem: string }[] }>('GET_NOTIFICATIONS_COUNT');