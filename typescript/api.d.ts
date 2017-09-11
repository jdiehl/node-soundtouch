import { Bass, BassCapability, Key, KeyState, NowPlaying, SourceInfo, Volume } from "./types";
import { DeviceInfo } from "./Device";
export declare function getInfo(ipAddress: string): Promise<DeviceInfo>;
export declare function setKey(ipAddress: string, key: Key, state: KeyState): Promise<void>;
export declare function listSources(ipAddress: string): Promise<SourceInfo[]>;
export declare function selectSource(ipAddress: string, source: SourceInfo): Promise<void>;
export declare function getBassCapabilities(ipAddress: string): Promise<BassCapability>;
export declare function getBass(ipAddress: string): Promise<Bass>;
export declare function setBass(ipAddress: string, value: number): Promise<void>;
export declare function setName(ipAddress: string, name: string): Promise<void>;
export declare function getVolume(ipAddress: string): Promise<Volume>;
export declare function setVolume(ipAddress: string, value: number): Promise<void>;
export declare function getNowPlaying(ipAddress: string): Promise<NowPlaying>;
