// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { alexander, driedDanta } from '@polkadot/chainspec';
import { hexToU8a, u8aToHex } from '@polkadot/util';

import trieRoot from './trieRoot';

describe('genesis roots', () => {
  [alexander, driedDanta].forEach(({ genesis: { raw }, genesisRoot, name }) => {
    it(`has the correct root for ${name}`, () => {
      expect(
        u8aToHex(
          trieRoot(
            Object.keys(raw).map((key) => ({
              k: hexToU8a(key),
              v: hexToU8a(raw[key])
            }))
          )
        )
      ).toEqual(genesisRoot);
    });
  });
});
